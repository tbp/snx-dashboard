"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { RiQuillPenAiLine, RiSettingsLine } from "@remixicon/react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import SliderControl from "@/components/slider-control";
import { Sheet, SheetTitle, SheetContent } from "@/components/ui/sheet";
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ReviewsWidgetSettings {
  cmsId: string;
  maxReviews: number;
  showHeader: boolean;
  showFilters: boolean;
  showPagination: boolean;
}

type SettingsPanelContext = {
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  togglePanel: () => void;
  reviewsSettings: ReviewsWidgetSettings;
  updateReviewsSettings: (settings: Partial<ReviewsWidgetSettings>) => void;
};

const SettingsPanelContext = React.createContext<SettingsPanelContext | null>(
  null,
);

function useSettingsPanel() {
  const context = React.useContext(SettingsPanelContext);
  if (!context) {
    throw new Error(
      "useSettingsPanel must be used within a SettingsPanelProvider.",
    );
  }
  return context;
}

const SettingsPanelProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile(1024);
  const [openMobile, setOpenMobile] = React.useState(false);
  
  // Reviews widget settings state
  const [reviewsSettings, setReviewsSettings] = React.useState<ReviewsWidgetSettings>({
    cmsId: "",
    maxReviews: 10,
    showHeader: true,
    showFilters: true,
    showPagination: true,
  });

  // Helper to toggle the sidebar.
  const togglePanel = React.useCallback(() => {
    return isMobile && setOpenMobile((open) => !open);
  }, [isMobile, setOpenMobile]);

  // Helper to update reviews settings
  const updateReviewsSettings = React.useCallback((settings: Partial<ReviewsWidgetSettings>) => {
    setReviewsSettings(prev => ({ ...prev, ...settings }));
  }, []);

  const contextValue = React.useMemo<SettingsPanelContext>(
    () => ({
      isMobile,
      openMobile,
      setOpenMobile,
      togglePanel,
      reviewsSettings,
      updateReviewsSettings,
    }),
    [isMobile, openMobile, setOpenMobile, togglePanel, reviewsSettings, updateReviewsSettings],
  );

  return (
    <SettingsPanelContext.Provider value={contextValue}>
      {children}
    </SettingsPanelContext.Provider>
  );
};
SettingsPanelProvider.displayName = "SettingsPanelProvider";

const SettingsPanelContent = () => {
  const id = React.useId();
  const { reviewsSettings, updateReviewsSettings } = useSettingsPanel();

  return (
    <>
      {/* Sidebar header */}
      <div className="py-6">
        <div className="flex items-center gap-3">
          <RiQuillPenAiLine
            className="text-muted-foreground/70"
            size={20}
            aria-hidden="true"
          />
          <h2 className="text-sm font-medium">Настройки виджета отзывов</h2>
        </div>
      </div>

      {/* Sidebar content */}
      <div className="-mt-px">
        {/* Content group */}
        <div className="py-6 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-black/[0.06] before:via-black/10 before:to-black/[0.06]">
          <h3 className="text-xs font-medium uppercase text-muted-foreground/80 mb-6">
            Конфигурация виджета
          </h3>
          <div className="space-y-4">
            {/* CMS ID */}
            <div className="space-y-2.5">
              <Label htmlFor={`${id}-cms-id`} className="font-normal text-sm">
                CMS ID
              </Label>
              <Input
                id={`${id}-cms-id`}
                value={reviewsSettings.cmsId}
                onChange={(e) => updateReviewsSettings({ cmsId: e.target.value })}
                className="h-8 text-sm"
                placeholder="Введите CMS ID"
              />
            </div>

            {/* Show Header */}
            <div className="flex items-center justify-between gap-3 py-1">
              <Label htmlFor={`${id}-show-header`} className="font-normal text-sm">
                Репутация
              </Label>
              <Checkbox
                id={`${id}-show-header`}
                checked={reviewsSettings.showHeader}
                onCheckedChange={(checked) => 
                  updateReviewsSettings({ showHeader: checked as boolean })
                }
              />
            </div>

            {/* Show Filters */}
            <div className="flex items-center justify-between gap-3 py-1">
              <Label htmlFor={`${id}-show-filters`} className="font-normal text-sm">
                Фильтры
              </Label>
              <Checkbox
                id={`${id}-show-filters`}
                checked={reviewsSettings.showFilters}
                onCheckedChange={(checked) => 
                  updateReviewsSettings({ showFilters: checked as boolean })
                }
              />
            </div>

            {/* Show Pagination */}
            <div className="flex items-center justify-between gap-3 py-1">
              <Label htmlFor={`${id}-show-pagination`} className="font-normal text-sm">
                Пагинация
              </Label>
              <Checkbox
                id={`${id}-show-pagination`}
                checked={reviewsSettings.showPagination}
                onCheckedChange={(checked) => 
                  updateReviewsSettings({ showPagination: checked as boolean })
                }
              />
            </div>
          </div>
        </div>

        {/* Content group */}
        <div className="py-6 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-black/[0.06] before:via-black/10 before:to-black/[0.06]">
          <h3 className="text-xs font-medium uppercase text-muted-foreground/80 mb-6">
            Параметры отображения
          </h3>
          <div className="space-y-4">
            {/* Maximum Reviews */}
            <SliderControl
              minValue={1}
              maxValue={100}
              initialValue={[reviewsSettings.maxReviews]}
              defaultValue={[10]}
              step={1}
              label="Максимум отзывов"
              onValueChange={(value: [number]) => updateReviewsSettings({ maxReviews: value[0] })}
            />
          </div>
        </div>
      </div>
    </>
  );
};
SettingsPanelContent.displayName = "SettingsPanelContent";

const SettingsPanel = () => {
  const { isMobile, openMobile, setOpenMobile } = useSettingsPanel();

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent className="w-80 px-5 md:px-7 py-0 bg-[hsl(240_5%_92.16%)] [&>button]:hidden">
          <SheetTitle className="hidden">Настройки</SheetTitle>
          <div className="flex h-full w-full flex-col">
            <SettingsPanelContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <ScrollArea>
      <div className="w-[320px] px-5 md:px-7">
        <SettingsPanelContent />
      </div>
    </ScrollArea>
  );
};
SettingsPanel.displayName = "SettingsPanel";

const SettingsPanelTrigger = ({
  onClick,
}: {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { isMobile, togglePanel } = useSettingsPanel();

  if (!isMobile) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      className="px-2"
      onClick={(event) => {
        onClick?.(event);
        togglePanel();
      }}
    >
      <RiSettingsLine
        className="text-muted-foreground sm:text-muted-foreground/70 size-5"
        size={20}
        aria-hidden="true"
      />
      <span className="max-sm:sr-only">Настройки</span>
    </Button>
  );
};
SettingsPanelTrigger.displayName = "SettingsPanelTrigger";

export {
  SettingsPanel,
  SettingsPanelProvider,
  SettingsPanelTrigger,
  useSettingsPanel,
  type ReviewsWidgetSettings,
};
