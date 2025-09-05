"use client";

import { useEffect, useRef, useState, useId } from "react";
import { useSettingsPanel } from "@/components/settings-panel";

interface ReviewsWidgetOptions {
  cmsId: string;
  maxReviews?: number;
  showHeader?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
}

interface ReviewsWidgetProps {
  cmsId?: string;
  maxReviews?: number;
  showHeader?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  className?: string;
  useSettingsFromPanel?: boolean;
}

declare global {
  interface Window {
    SNXReviewsWidget?: {
      createSNXReviewsWidget?: (containerId: string, options: ReviewsWidgetOptions) => void;
      default?: (containerId: string, options: ReviewsWidgetOptions) => void;
    };
    createSNXReviewsWidget?: (containerId: string, options: ReviewsWidgetOptions) => void;
  }
}

// Component that uses settings from panel
function ReviewsWidgetWithSettings({
  cmsId: propCmsId,
  maxReviews: propMaxReviews = 10,
  showHeader: propShowHeader = true,
  showFilters: propShowFilters = true,
  showPagination: propShowPagination = true,
  className = "",
}: Omit<ReviewsWidgetProps, 'useSettingsFromPanel'>) {
  const { reviewsSettings } = useSettingsPanel();
  
  return (
    <ReviewsWidgetCore
      cmsId={reviewsSettings.cmsId || propCmsId || "default-cms-id"}
      maxReviews={reviewsSettings.maxReviews ?? propMaxReviews}
      showHeader={reviewsSettings.showHeader ?? propShowHeader}
      showFilters={reviewsSettings.showFilters ?? propShowFilters}
      showPagination={reviewsSettings.showPagination ?? propShowPagination}
      className={className}
    />
  );
}

// Core widget component without settings panel dependency
function ReviewsWidgetCore({
  cmsId = "default-cms-id",
  maxReviews = 10,
  showHeader = true,
  showFilters = true,
  showPagination = true,
  className = "",
}: Omit<ReviewsWidgetProps, 'useSettingsFromPanel'>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const id = useId();
  const widgetId = `reviews-widget-${id.replace(/:/g, '-')}`;

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;

    const initializeWidget = () => {
      try {
        let widgetFunction = null;

        // Пробуем различные варианты доступа к функции виджета
        if (typeof window.createSNXReviewsWidget === 'function') {
          widgetFunction = window.createSNXReviewsWidget;
          console.log('Using window.createSNXReviewsWidget');
        } else if (window.SNXReviewsWidget?.createSNXReviewsWidget) {
          widgetFunction = window.SNXReviewsWidget.createSNXReviewsWidget;
          console.log('Using window.SNXReviewsWidget.createSNXReviewsWidget');
        } else if (window.SNXReviewsWidget?.default) {
          widgetFunction = window.SNXReviewsWidget.default;
          console.log('Using window.SNXReviewsWidget.default');
        }

        if (widgetFunction && containerRef.current) {
          console.log('Initializing widget with:', { widgetId, cmsId, maxReviews, showHeader, showFilters, showPagination });
          widgetFunction(widgetId, {
            cmsId,
            maxReviews,
            showHeader,
            showFilters,
            showPagination,
          });
          setIsLoading(false);
          console.log('Widget initialized successfully');
        } else {
          console.warn('Widget function or container not available:', {
            widgetFunction: !!widgetFunction,
            container: !!containerRef.current,
            windowFunctions: {
              createSNXReviewsWidget: typeof window.createSNXReviewsWidget,
              SNXReviewsWidget: !!window.SNXReviewsWidget,
              SNXReviewsWidgetCreateFunction: !!window.SNXReviewsWidget?.createSNXReviewsWidget,
              SNXReviewsWidgetDefault: !!window.SNXReviewsWidget?.default
            }
          });
          // Показываем placeholder вместо ошибки, если скрипт не загружен
          setError('Widget script not loaded. This is expected in development mode.');
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error initializing reviews widget:', err);
        setError('Failed to initialize reviews widget');
        setIsLoading(false);
      }
    };

    const loadScript = () => {
      // Проверяем, не загружен ли уже скрипт
      const existingScript = document.querySelector('script[src*="snx-reviews-widget"]');
      if (existingScript) {
        // Если скрипт уже загружен, проверяем доступность функции
        setTimeout(() => {
          if (typeof window.createSNXReviewsWidget === 'function' || 
              window.SNXReviewsWidget?.createSNXReviewsWidget ||
              window.SNXReviewsWidget?.default) {
            initializeWidget();
          } else {
            console.warn('Script loaded but widget function not available, trying to initialize anyway');
            initializeWidget();
          }
        }, 100);
        return;
      }

      scriptElement = document.createElement('script');
      scriptElement.src = '/dist/snx-reviews-widget.umd.js';
      scriptElement.async = true;
      
      scriptElement.onload = () => {
        console.log('Reviews widget script loaded successfully');
        // Небольшая задержка для полной инициализации
        setTimeout(initializeWidget, 100);
      };

      scriptElement.onerror = (error) => {
        console.error('Failed to load reviews script:', error);
        setError('Failed to load reviews script. Please check if the script file exists at /dist/snx-reviews-widget.umd.js');
        setIsLoading(false);
      };

      document.head.appendChild(scriptElement);
    };

    loadScript();

    return () => {
      // Очистка при размонтировании компонента
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [cmsId, maxReviews, showHeader, showFilters, showPagination, widgetId]);

  if (error) {
    return (
      <div className={`p-8 text-center text-muted-foreground border-2 border-dashed border-muted rounded-lg ${className}`}>
        <div className="max-w-md mx-auto">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-lg font-medium text-foreground mb-2">Reviews Widget</h3>
          <p className="text-sm mb-2">Unable to load reviews widget</p>
          <p className="text-xs text-muted-foreground/70">{error}</p>
          <div className="mt-4 text-xs text-muted-foreground/50">
            <p>Widget ID: {widgetId}</p>
            <p>CMS ID: {cmsId}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {isLoading && (
        <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-muted rounded-lg">
          <div className="max-w-md mx-auto">
            <div className="text-4xl mb-4">⏳</div>
            <h3 className="text-lg font-medium text-foreground mb-2">Loading Reviews</h3>
            <p className="text-sm mb-2">Initializing reviews widget...</p>
            <div className="mt-4 text-xs text-muted-foreground/50">
              <p>Widget ID: {widgetId}</p>
              <p>CMS ID: {cmsId}</p>
            </div>
          </div>
        </div>
      )}
      <div 
        ref={containerRef}
        id={widgetId}
        className={isLoading ? 'opacity-0 absolute' : 'opacity-100 transition-opacity duration-300'}
      />
    </div>
  );
}

// Main exported component that chooses between panel-controlled and prop-controlled
export function ReviewsWidget({
  useSettingsFromPanel = false,
  ...props
}: ReviewsWidgetProps) {
  if (useSettingsFromPanel) {
    return <ReviewsWidgetWithSettings {...props} />;
  }
  
  return <ReviewsWidgetCore {...props} />;
}
