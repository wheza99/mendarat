"use client";

import { TemplateSwitcher } from "../../../components/layout/template-switcher";
import { useState, useEffect, Suspense, lazy, Component, ErrorInfo, ReactNode } from "react";
import Theme73 from './theme-73';
import Theme74 from './theme-74';
import Theme75 from './theme-75';
import Theme76 from './theme-76';
import Theme77 from './theme-77';
import Theme78 from './theme-78';
import Theme79 from './theme-79';
import Theme80 from './theme-80';
import Theme81 from './theme-81';
import Theme82 from './theme-82';
import Theme83 from './theme-83';
import Theme84 from './theme-84';
import Theme85 from './theme-85';
import Theme86 from './theme-86';
import Theme89 from './theme-89';
import Theme90 from './theme-90';
import Theme91 from './theme-91';
import Theme104 from './theme-104';
import Theme105 from './theme-105';
import Theme106 from './theme-106';
import Theme107 from './theme-107';
import Theme116 from './theme-116';
import Theme117 from './theme-117';
import Theme118 from './theme-118';
import Theme119 from './theme-119';
import Theme120 from './theme-120';
import Theme121 from './theme-121';
import Theme122 from './theme-122';
import Theme123 from './theme-123';
import Theme124 from './theme-124';
import Theme125 from './theme-125';
import Theme126 from './theme-126';
import Theme127 from './theme-127';
import Theme128 from './theme-128';
import Theme129 from './theme-129';
import Theme130 from './theme-130';
import Theme142 from './theme-142';
import Theme144 from './theme-144';
import Theme172 from './theme-172';
import Theme173 from './theme-173';
import Theme174 from './theme-174';
import Theme175 from './theme-175';
import Theme176 from './theme-176';
import Theme177 from './theme-177';
import Theme178 from './theme-178';
import Theme179 from './theme-179';
import Theme180 from './theme-180';
import Theme181 from './theme-181';
import Theme182 from './theme-182';
import Theme183 from './theme-183';
import Theme184 from './theme-184';
import Theme185 from './theme-185';
import Theme186 from './theme-186';
import Theme187 from './theme-187';
import Theme188 from './theme-188';
import Theme189 from './theme-189';
import Theme190 from './theme-190';
import Theme191 from './theme-191';
import Theme192 from './theme-192';
import Theme193 from './theme-193';
import Theme194 from './theme-194';
import Theme195 from './theme-195';
import Theme196 from './theme-196';
import Theme197 from './theme-197';
import Theme198 from './theme-198';
import Theme199 from './theme-199';
import Theme200 from './theme-200';
import Theme201 from './theme-201';
import Theme202 from './theme-202';

// Error Boundary Component
class ThemeErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Theme loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-red-800">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-red-400 text-lg font-mono">Theme failed to load</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Improved dynamic import with better error handling
const createSafeLazyImport = (importFn: () => Promise<any>, fallbackTheme: string = "theme-1") => {
  return lazy(() => 
    importFn().catch((error) => {
      console.warn(`Theme failed to load, falling back to ${fallbackTheme}:`, error);
      return import(`./${fallbackTheme}`);
    })
  );
};

// Dynamic imports for all themes with improved error handling
const HomePageTheme1 = createSafeLazyImport(() => import("./theme-1"));
const HomePageTheme2 = createSafeLazyImport(() => import("./theme-2"));
const HomePageTheme3 = createSafeLazyImport(() => import("./theme-3"));
const HomePageTheme4 = createSafeLazyImport(() => import("./theme-4"));
const HomePageTheme5 = createSafeLazyImport(() => import("./theme-5"));
const HomePageTheme6 = createSafeLazyImport(() => import("./theme-6"));
const HomePageTheme7 = createSafeLazyImport(() => import("./theme-7"));
const HomePageTheme8 = createSafeLazyImport(() => import("./theme-8"));
const HomePageTheme9 = createSafeLazyImport(() => import("./theme-9"));
const HomePageTheme10 = createSafeLazyImport(() => import("./theme-10"));
const HomePageTheme11 = createSafeLazyImport(() => import("./theme-11"));
const HomePageTheme12 = createSafeLazyImport(() => import("./theme-12"));
const HomePageTheme13 = createSafeLazyImport(() => import("./theme-13"));
const HomePageTheme14 = createSafeLazyImport(() => import("./theme-14"));
const HomePageTheme15 = createSafeLazyImport(() => import("./theme-15"));
const HomePageTheme16 = createSafeLazyImport(() => import("./theme-16"));
const HomePageTheme17 = createSafeLazyImport(() => import("./theme-17"));
const HomePageTheme18 = createSafeLazyImport(() => import("./theme-18"));
const HomePageTheme19 = createSafeLazyImport(() => import("./theme-19"));
const HomePageTheme20 = createSafeLazyImport(() => import("./theme-20"));
const HomePageTheme21 = createSafeLazyImport(() => import("./theme-21"));
const HomePageTheme22 = createSafeLazyImport(() => import("./theme-22"));
const HomePageTheme23 = createSafeLazyImport(() => import("./theme-23"));
const HomePageTheme24 = createSafeLazyImport(() => import("./theme-24"));
const HomePageTheme25 = createSafeLazyImport(() => import("./theme-25"));
const HomePageTheme26 = createSafeLazyImport(() => import("./theme-26"));
const HomePageTheme27 = createSafeLazyImport(() => import("./theme-27"));
const HomePageTheme28 = createSafeLazyImport(() => import("./theme-28"));
const HomePageTheme29 = createSafeLazyImport(() => import("./theme-29"));
const HomePageTheme30 = createSafeLazyImport(() => import("./theme-30"));
const HomePageTheme31 = createSafeLazyImport(() => import("./theme-31"));
const HomePageTheme32 = createSafeLazyImport(() => import("./theme-32"));
const HomePageTheme33 = createSafeLazyImport(() => import("./theme-33"));
const HomePageTheme34 = createSafeLazyImport(() => import("./theme-34"));
const HomePageTheme35 = createSafeLazyImport(() => import("./theme-35"));
const HomePageTheme36 = createSafeLazyImport(() => import("./theme-36"));
const HomePageTheme37 = createSafeLazyImport(() => import("./theme-37"));
const HomePageTheme38 = createSafeLazyImport(() => import("./theme-38"));
const HomePageTheme39 = createSafeLazyImport(() => import("./theme-39"));
const HomePageTheme40 = createSafeLazyImport(() => import("./theme-40"));
const HomePageTheme41 = createSafeLazyImport(() => import("./theme-41"));
const HomePageTheme42 = createSafeLazyImport(() => import("./theme-42"));
const HomePageTheme43 = createSafeLazyImport(() => import("./theme-43"));

// These themes might have issues, so we add error handling
const HomePageTheme44 = createSafeLazyImport(() => import("./theme-44"), "theme-1");
const HomePageTheme45 = createSafeLazyImport(() => import("./theme-45"), "theme-1");
const HomePageTheme46 = createSafeLazyImport(() => import("./theme-46"), "theme-1");
const HomePageTheme47 = createSafeLazyImport(() => import("./theme-47"), "theme-1");
const HomePageTheme48 = createSafeLazyImport(() => import("./theme-48"), "theme-1");
const HomePageTheme49 = createSafeLazyImport(() => import("./theme-49"), "theme-1");
const HomePageTheme50 = createSafeLazyImport(() => import("./theme-50"), "theme-1");
const HomePageTheme51 = createSafeLazyImport(() => import("./theme-51"), "theme-1");
const HomePageTheme52 = createSafeLazyImport(() => import("./theme-52"), "theme-1");
const HomePageTheme53 = createSafeLazyImport(() => import("./theme-53"), "theme-1");
const HomePageTheme54 = createSafeLazyImport(() => import("./theme-54"), "theme-1");
const HomePageTheme55 = createSafeLazyImport(() => import("./theme-55"), "theme-1");
const HomePageTheme56 = createSafeLazyImport(() => import("./theme-56"), "theme-1");
const HomePageTheme57 = createSafeLazyImport(() => import("./theme-57"), "theme-1");
const HomePageTheme58 = createSafeLazyImport(() => import("./theme-58"), "theme-1");
const HomePageTheme59 = createSafeLazyImport(() => import("./theme-59"), "theme-1");
const HomePageTheme60 = createSafeLazyImport(() => import("./theme-60"), "theme-1");
const HomePageTheme61 = createSafeLazyImport(() => import("./theme-61"), "theme-1");
const HomePageTheme62 = createSafeLazyImport(() => import("./theme-62"), "theme-1");
const HomePageTheme63 = createSafeLazyImport(() => import("./theme-63"), "theme-1");
const HomePageTheme64 = createSafeLazyImport(() => import("./theme-64"), "theme-1");
const HomePageTheme65 = createSafeLazyImport(() => import("./theme-65"), "theme-1");
const HomePageTheme66 = createSafeLazyImport(() => import("./theme-66"), "theme-1");
const HomePageTheme67 = createSafeLazyImport(() => import("./theme-67"), "theme-1");
const HomePageTheme68 = createSafeLazyImport(() => import("./theme-68"), "theme-1");
const HomePageTheme69 = createSafeLazyImport(() => import("./theme-69"), "theme-1");
const HomePageTheme70 = createSafeLazyImport(() => import("./theme-70"), "theme-1");
const HomePageTheme71 = createSafeLazyImport(() => import("./theme-71"), "theme-1");
const HomePageTheme72 = createSafeLazyImport(() => import("./theme-72"), "theme-1");
const HomePageTheme80 = createSafeLazyImport(() => import("./theme-80"), "theme-1");
const HomePageTheme81 = createSafeLazyImport(() => import("./theme-81"), "theme-1");
const HomePageTheme82 = createSafeLazyImport(() => import("./theme-82"), "theme-1");
const HomePageTheme83 = createSafeLazyImport(() => import("./theme-83"), "theme-1");
const HomePageTheme84 = createSafeLazyImport(() => import("./theme-84"), "theme-1");
const HomePageTheme85 = createSafeLazyImport(() => import("./theme-85"), "theme-1");
const HomePageTheme86 = createSafeLazyImport(() => import("./theme-86"), "theme-1");
const HomePageTheme87 = createSafeLazyImport(() => import("./theme-87"), "theme-1");
const HomePageTheme88 = createSafeLazyImport(() => import("./theme-88"), "theme-1");
const HomePageTheme89 = createSafeLazyImport(() => import("./theme-89"), "theme-1");
const HomePageTheme90 = createSafeLazyImport(() => import("./theme-90"), "theme-1");
const HomePageTheme91 = createSafeLazyImport(() => import("./theme-91"), "theme-1");
const HomePageTheme92 = createSafeLazyImport(() => import("./theme-92"), "theme-1");
const HomePageTheme93 = createSafeLazyImport(() => import("./theme-93"), "theme-1");
const HomePageTheme94 = createSafeLazyImport(() => import("./theme-94"), "theme-1");
const HomePageTheme95 = createSafeLazyImport(() => import("./theme-95"), "theme-1");
const HomePageTheme96 = createSafeLazyImport(() => import("./theme-96"), "theme-1");
const HomePageTheme97 = createSafeLazyImport(() => import("./theme-97"), "theme-1");
const HomePageTheme98 = createSafeLazyImport(() => import("./theme-98"), "theme-1");
const HomePageTheme99 = createSafeLazyImport(() => import("./theme-99"), "theme-1");
const HomePageTheme100 = createSafeLazyImport(() => import("./theme-100"), "theme-1");
const HomePageTheme101 = createSafeLazyImport(() => import("./theme-101"), "theme-1");
const HomePageTheme102 = createSafeLazyImport(() => import("./theme-102"), "theme-1");
const HomePageTheme103 = createSafeLazyImport(() => import("./theme-103"), "theme-1");
const HomePageTheme104 = createSafeLazyImport(() => import("./theme-104"), "theme-1");
const HomePageTheme105 = createSafeLazyImport(() => import("./theme-105"), "theme-1");
const HomePageTheme106 = createSafeLazyImport(() => import("./theme-106"), "theme-1");
const HomePageTheme107 = createSafeLazyImport(() => import("./theme-107"), "theme-1");
const HomePageTheme108 = createSafeLazyImport(() => import("./theme-108"), "theme-1");
const HomePageTheme109 = createSafeLazyImport(() => import("./theme-109"), "theme-1");
const HomePageTheme110 = createSafeLazyImport(() => import("./theme-110"), "theme-1");
const HomePageTheme111 = createSafeLazyImport(() => import("./theme-111"), "theme-1");
const HomePageTheme112 = createSafeLazyImport(() => import("./theme-112"), "theme-1");
const HomePageTheme113 = createSafeLazyImport(() => import("./theme-113"), "theme-1");
const HomePageTheme114 = createSafeLazyImport(() => import("./theme-114"), "theme-1");
const HomePageTheme115 = createSafeLazyImport(() => import("./theme-115"), "theme-1");
const HomePageTheme116 = createSafeLazyImport(() => import("./theme-116"), "theme-1");
const HomePageTheme117 = createSafeLazyImport(() => import("./theme-117"), "theme-1");
const HomePageTheme118 = createSafeLazyImport(() => import("./theme-118"), "theme-1");
const HomePageTheme119 = createSafeLazyImport(() => import("./theme-119"), "theme-1");
const HomePageTheme120 = createSafeLazyImport(() => import("./theme-120"), "theme-1");
const HomePageTheme121 = createSafeLazyImport(() => import("./theme-121"), "theme-1");
const HomePageTheme122 = createSafeLazyImport(() => import("./theme-122"), "theme-1");
const HomePageTheme123 = createSafeLazyImport(() => import("./theme-123"), "theme-1");
const HomePageTheme124 = createSafeLazyImport(() => import("./theme-124"), "theme-1");
const HomePageTheme125 = createSafeLazyImport(() => import("./theme-125"), "theme-1");
const HomePageTheme126 = createSafeLazyImport(() => import("./theme-126"), "theme-1");
const HomePageTheme127 = createSafeLazyImport(() => import("./theme-127"), "theme-1");
const HomePageTheme128 = createSafeLazyImport(() => import("./theme-128"), "theme-1");
const HomePageTheme129 = createSafeLazyImport(() => import("./theme-129"), "theme-1");
const HomePageTheme130 = createSafeLazyImport(() => import("./theme-130"), "theme-1");
const HomePageTheme131 = createSafeLazyImport(() => import("./theme-131"), "theme-1");
const HomePageTheme132 = createSafeLazyImport(() => import("./theme-132"), "theme-1");
const HomePageTheme133 = createSafeLazyImport(() => import("./theme-133"), "theme-1");
const HomePageTheme134 = createSafeLazyImport(() => import("./theme-134"), "theme-1");
const HomePageTheme135 = createSafeLazyImport(() => import("./theme-135"), "theme-1");
const HomePageTheme136 = createSafeLazyImport(() => import("./theme-136"), "theme-1");
const HomePageTheme137 = createSafeLazyImport(() => import("./theme-137"), "theme-1");
const HomePageTheme138 = createSafeLazyImport(() => import("./theme-138"), "theme-1");
const HomePageTheme139 = createSafeLazyImport(() => import("./theme-139"), "theme-1");
const HomePageTheme140 = createSafeLazyImport(() => import("./theme-140"), "theme-1");
const HomePageTheme141 = createSafeLazyImport(() => import("./theme-141"), "theme-1");
const HomePageTheme142 = createSafeLazyImport(() => import("./theme-142"), "theme-1");
const HomePageTheme143 = createSafeLazyImport(() => import("./theme-143"), "theme-1");
const HomePageTheme144 = createSafeLazyImport(() => import("./theme-144"), "theme-1");
const HomePageTheme145 = createSafeLazyImport(() => import("./theme-145"), "theme-1");
const HomePageTheme146 = createSafeLazyImport(() => import("./theme-146"), "theme-1");
const HomePageTheme147 = createSafeLazyImport(() => import("./theme-147"), "theme-1");
const HomePageTheme148 = createSafeLazyImport(() => import("./theme-148"), "theme-1");
const HomePageTheme149 = createSafeLazyImport(() => import("./theme-149"), "theme-1");
const HomePageTheme150 = createSafeLazyImport(() => import("./theme-150"), "theme-1");
const HomePageTheme151 = createSafeLazyImport(() => import("./theme-151"), "theme-1");
const HomePageTheme152 = createSafeLazyImport(() => import("./theme-152"), "theme-1");
const HomePageTheme153 = createSafeLazyImport(() => import("./theme-153"), "theme-1");
const HomePageTheme154 = createSafeLazyImport(() => import("./theme-154"), "theme-1");
const HomePageTheme155 = createSafeLazyImport(() => import("./theme-155"), "theme-1");
const HomePageTheme156 = createSafeLazyImport(() => import("./theme-156"), "theme-1");
const HomePageTheme157 = createSafeLazyImport(() => import("./theme-157"), "theme-1");
const HomePageTheme158 = createSafeLazyImport(() => import("./theme-158"), "theme-1");
const HomePageTheme159 = createSafeLazyImport(() => import("./theme-159"), "theme-1");
const HomePageTheme160 = createSafeLazyImport(() => import("./theme-160"), "theme-1");
const HomePageTheme161 = createSafeLazyImport(() => import("./theme-161"), "theme-1");
const HomePageTheme162 = createSafeLazyImport(() => import("./theme-162"), "theme-1");
const HomePageTheme163 = createSafeLazyImport(() => import("./theme-163"), "theme-1");
const HomePageTheme164 = createSafeLazyImport(() => import("./theme-164"), "theme-1");
const HomePageTheme165 = createSafeLazyImport(() => import("./theme-165"), "theme-1");
const HomePageTheme166 = createSafeLazyImport(() => import("./theme-166"), "theme-1");
const HomePageTheme167 = createSafeLazyImport(() => import("./theme-167"), "theme-1");
const HomePageTheme168 = createSafeLazyImport(() => import("./theme-168"), "theme-1");
const HomePageTheme169 = createSafeLazyImport(() => import("./theme-169"), "theme-1");
const HomePageTheme170 = createSafeLazyImport(() => import("./theme-170"), "theme-1");
const HomePageTheme171 = createSafeLazyImport(() => import("./theme-171"), "theme-1");
const HomePageTheme172 = createSafeLazyImport(() => import("./theme-172"), "theme-1");
const HomePageTheme173 = createSafeLazyImport(() => import("./theme-173"), "theme-1");
const HomePageTheme174 = createSafeLazyImport(() => import("./theme-174"), "theme-1");
const HomePageTheme175 = createSafeLazyImport(() => import("./theme-175"), "theme-1");
const HomePageTheme176 = createSafeLazyImport(() => import("./theme-176"), "theme-1");
const HomePageTheme177 = createSafeLazyImport(() => import("./theme-177"), "theme-1");
const HomePageTheme178 = createSafeLazyImport(() => import("./theme-178"), "theme-1");
const HomePageTheme179 = createSafeLazyImport(() => import("./theme-179"), "theme-1");
const HomePageTheme180 = createSafeLazyImport(() => import("./theme-180"), "theme-1");
const HomePageTheme181 = createSafeLazyImport(() => import("./theme-181"), "theme-1");
const HomePageTheme182 = createSafeLazyImport(() => import("./theme-182"), "theme-1");
const HomePageTheme183 = createSafeLazyImport(() => import("./theme-183"), "theme-1");
const HomePageTheme186 = createSafeLazyImport(() => import("./theme-186"), "theme-1");
const HomePageTheme187 = createSafeLazyImport(() => import("./theme-187"), "theme-1");
const HomePageTheme188 = createSafeLazyImport(() => import("./theme-188"), "theme-1");
const HomePageTheme189 = createSafeLazyImport(() => import("./theme-189"), "theme-1");
const HomePageTheme190 = createSafeLazyImport(() => import("./theme-190"), "theme-1");
const HomePageTheme191 = createSafeLazyImport(() => import("./theme-191"), "theme-1");
const HomePageTheme192 = createSafeLazyImport(() => import("./theme-192"), "theme-1");
const HomePageTheme193 = createSafeLazyImport(() => import("./theme-193"), "theme-1");
const HomePageTheme194 = createSafeLazyImport(() => import("./theme-194"), "theme-1");
const HomePageTheme195 = createSafeLazyImport(() => import("./theme-195"), "theme-1");
const HomePageTheme196 = createSafeLazyImport(() => import("./theme-196"), "theme-1");
const HomePageTheme197 = createSafeLazyImport(() => import("./theme-197"), "theme-1");
const HomePageTheme198 = createSafeLazyImport(() => import("./theme-198"), "theme-1");
const HomePageTheme199 = createSafeLazyImport(() => import("./theme-199"), "theme-1");

export type LandingPageTheme = "theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10" | "theme-11" | "theme-12" | "theme-13" | "theme-14" | "theme-15" | "theme-16" | "theme-17" | "theme-18" | "theme-19" | "theme-20" | "theme-21" | "theme-22" | "theme-23" | "theme-24" | "theme-25" | "theme-26" | "theme-27" | "theme-28" | "theme-29" | "theme-30" | "theme-31" | "theme-32" | "theme-33" | "theme-34" | "theme-35" | "theme-36" | "theme-37" | "theme-38" | "theme-39" | "theme-40" | "theme-41" | "theme-42" | "theme-43" | "theme-44" | "theme-45" | "theme-46" | "theme-47" | "theme-48" | "theme-49" | "theme-50" | "theme-51" | "theme-52" | "theme-53" | "theme-54" | "theme-55" | "theme-56" | "theme-57" | "theme-58" | "theme-59" | "theme-60" | "theme-61" | "theme-62" | "theme-63" | "theme-64" | "theme-65" | "theme-66" | "theme-67" | "theme-68" | "theme-69" | "theme-70" | "theme-71" | "theme-72" | "theme-73" | "theme-74" | "theme-75" | "theme-76" | "theme-77" | "theme-78" | "theme-79" | "theme-80" | "theme-81" | "theme-82" | "theme-83" | "theme-84" | "theme-85" | "theme-86" | "theme-87" | "theme-88" | "theme-89" | "theme-90" | "theme-91" | "theme-92" | "theme-93" | "theme-94" | "theme-95" | "theme-96" | "theme-97" | "theme-98" | "theme-99" | "theme-100" | "theme-101" | "theme-102" | "theme-103" | "theme-104" | "theme-105" | "theme-106" | "theme-107" | "theme-108" | "theme-109" | "theme-110" | "theme-111" | "theme-112" | "theme-113" | "theme-114" | "theme-115" | "theme-116" | "theme-117" | "theme-118" | "theme-119" | "theme-120" | "theme-121" | "theme-122" | "theme-123" | "theme-124" | "theme-125" | "theme-126" | "theme-127" | "theme-128" | "theme-129" | "theme-130" | "theme-131" | "theme-132" | "theme-133" | "theme-134" | "theme-135" | "theme-136" | "theme-137" | "theme-138" | "theme-139" | "theme-140" | "theme-141" | "theme-142" | "theme-143" | "theme-144" | "theme-145" | "theme-146" | "theme-147" | "theme-148" | "theme-149" | "theme-150" | "theme-151" | "theme-152" | "theme-153" | "theme-154" | "theme-155" | "theme-156" | "theme-157" | "theme-158" | "theme-159" | "theme-160" | "theme-161" | "theme-162" | "theme-163" | "theme-164" | "theme-165" | "theme-166" | "theme-167" | "theme-168" | "theme-169" | "theme-170" | "theme-171" | "theme-172" | "theme-173" | "theme-174" | "theme-175" | "theme-176" | "theme-177" | "theme-178" | "theme-179" | "theme-180" | "theme-181" | "theme-182" | "theme-183" | "theme-184" | "theme-185" | "theme-186" | "theme-187" | "theme-188" | "theme-189" | "theme-190" | "theme-191" | "theme-192" | "theme-193" | "theme-194" | "theme-195" | "theme-196" | "theme-197" | "theme-198" | "theme-199" | "theme-200" | "theme-201" | "theme-202";

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg font-mono">Loading theme...</p>
    </div>
  </div>
);

export default function HomePage() {
  const [activeTheme, setActiveTheme] = useState<LandingPageTheme>("theme-1");
  
  // Handle theme change
  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme as LandingPageTheme);
  };

  // Render the appropriate theme component based on activeTheme
  const renderTheme = () => {
    switch (activeTheme) {
      case "theme-1":
        return <HomePageTheme1 />;
      case "theme-2":
        return <HomePageTheme2 />;
      case "theme-3":
        return <HomePageTheme3 />;
      case "theme-4":
        return <HomePageTheme4 />;
      case "theme-5":
        return <HomePageTheme5 />;
      case "theme-6":
        return <HomePageTheme6 />;
      case "theme-7":
        return <HomePageTheme7 />;
      case "theme-8":
        return <HomePageTheme8 />;
      case "theme-9":
        return <HomePageTheme9 />;
      case "theme-10":
        return <HomePageTheme10 />;
      case "theme-11":
        return <HomePageTheme11 />;
      case "theme-12":
        return <HomePageTheme12 />;
      case "theme-13":
        return <HomePageTheme13 />;
      case "theme-14":
        return <HomePageTheme14 />;
      case "theme-15":
        return <HomePageTheme15 />;
      case "theme-16":
        return <HomePageTheme16 />;
      case "theme-17":
        return <HomePageTheme17 />;
      case "theme-18":
        return <HomePageTheme18 />;
      case "theme-19":
        return <HomePageTheme19 />;
      case "theme-20":
        return <HomePageTheme20 />;
      case "theme-21":
        return <HomePageTheme21 />;
      case "theme-22":
        return <HomePageTheme22 />;
      case "theme-23":
        return <HomePageTheme23 />;
      case "theme-24":
        return <HomePageTheme24 />;
      case "theme-25":
        return <HomePageTheme25 />;
      case "theme-26":
        return <HomePageTheme26 />;
      case "theme-27":
        return <HomePageTheme27 />;
      case "theme-28":
        return <HomePageTheme28 />;
      case "theme-29":
        return <HomePageTheme29 />;
      case "theme-30":
        return <HomePageTheme30 />;
      case "theme-31":
        return <HomePageTheme31 />;
      case "theme-32":
        return <HomePageTheme32 />;
      case "theme-33":
        return <HomePageTheme33 />;
      case "theme-34":
        return <HomePageTheme34 />;
      case "theme-35":
        return <HomePageTheme35 />;
      case "theme-36":
        return <HomePageTheme36 />;
      case "theme-37":
        return <HomePageTheme37 />;
      case "theme-38":
        return <HomePageTheme38 />;
      case "theme-39":
        return <HomePageTheme39 />;
      case "theme-40":
        return <HomePageTheme40 />;
      case "theme-41":
        return <HomePageTheme41 />;
      case "theme-42":
        return <HomePageTheme42 />;
      case "theme-43":
        return <HomePageTheme43 />;
      case "theme-44":
        return <HomePageTheme44 />;
      case "theme-45":
        return <HomePageTheme45 />;
      case "theme-46":
        return <HomePageTheme46 />;
      case "theme-47":
        return <HomePageTheme47 />;
      case "theme-48":
        return <HomePageTheme48 />;
      case "theme-49":
        return <HomePageTheme49 />;
      case "theme-50":
        return <HomePageTheme50 />;
      case "theme-51":
        return <HomePageTheme51 />;
      case "theme-52":
        return <HomePageTheme52 />;
      case "theme-53":
        return <HomePageTheme53 />;
      case "theme-54":
        return <HomePageTheme54 />;
      case "theme-55":
        return <HomePageTheme55 />;
      case "theme-56":
        return <HomePageTheme56 />;
      case "theme-57":
        return <HomePageTheme57 />;
      case "theme-58":
        return <HomePageTheme58 />;
      case "theme-59":
        return <HomePageTheme59 />;
      case "theme-60":
        return <HomePageTheme60 />;
      case "theme-61":
        return <HomePageTheme61 />;
      case "theme-62":
        return <HomePageTheme62 />;
      case "theme-63":
        return <HomePageTheme63 />;
      case "theme-64":
        return <HomePageTheme64 />;
      case "theme-65":
        return <HomePageTheme65 />;
      case "theme-66":
        return <HomePageTheme66 />;
      case "theme-67":
        return <HomePageTheme67 />;
      case "theme-68":
        return <HomePageTheme68 />;
      case "theme-69":
        return <HomePageTheme69 />;
      case "theme-70":
        return <HomePageTheme70 />;
      case "theme-71":
        return <HomePageTheme71 />;
      case "theme-72":
        return <HomePageTheme72 />;
      case "theme-73":
        return <Theme73 />;
      case "theme-74":
        return <Theme74 />;
      case "theme-75":
        return <Theme75 />;
      case "theme-76":
        return <Theme76 />;
      case "theme-77":
        return <Theme77 />;
      case "theme-78":
        return <Theme78 />;
      case "theme-79":
        return <Theme79 />;
      case "theme-80":
        return <HomePageTheme80 />;
      case "theme-81":
        return <HomePageTheme81 />;
      case "theme-82":
        return <HomePageTheme82 />;
      case "theme-83":
        return <HomePageTheme83 />;
      case "theme-84":
        return <HomePageTheme84 />;
      case "theme-85":
        return <HomePageTheme85 />;
      case "theme-86":
        return <HomePageTheme86 />;
      case "theme-87":
        return <HomePageTheme87 />;
      case "theme-88":
        return <HomePageTheme88 />;
             case "theme-89":
         return <Theme89 />;
       case "theme-90":
         return <HomePageTheme90 />;
       case "theme-91":
         return <HomePageTheme91 />;
       case "theme-92":
         return <HomePageTheme92 />;
       case "theme-93":
         return <HomePageTheme93 />;
       case "theme-94":
         return <HomePageTheme94 />;
       case "theme-95":
         return <HomePageTheme95 />;
       case "theme-96":
         return <HomePageTheme96 />;
       case "theme-97":
         return <HomePageTheme97 />;
       case "theme-98":
         return <HomePageTheme98 />;
       case "theme-99":
         return <HomePageTheme99 />;
       case "theme-100":
         return <HomePageTheme100 />;
       case "theme-101":
         return <HomePageTheme101 />;
       case "theme-102":
         return <HomePageTheme102 />;
       case "theme-103":
         return <HomePageTheme103 />;
       case "theme-104":
         return <HomePageTheme104 />;
       case "theme-105":
         return <HomePageTheme105 />;
       case "theme-106":
         return <HomePageTheme106 />;
       case "theme-107":
         return <HomePageTheme107 />;
       case "theme-108":
         return <HomePageTheme108 />;
       case "theme-109":
         return <HomePageTheme109 />;
       case "theme-110":
         return <HomePageTheme110 />;
       case "theme-111":
         return <HomePageTheme111 />;
       case "theme-112":
         return <HomePageTheme112 />;
       case "theme-113":
         return <HomePageTheme113 />;
       case "theme-114":
         return <HomePageTheme114 />;
       case "theme-115":
         return <HomePageTheme115 />;
       case "theme-116":
         return <Theme116 />;
       case "theme-117":
         return <Theme117 />;
       case "theme-118":
         return <Theme118 />;
       case "theme-119":
         return <Theme119 />;
       case "theme-120":
         return <Theme120 />;
       case "theme-121":
         return <Theme121 />;
       case "theme-122":
         return <Theme122 />;
       case "theme-123":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme123 /></Suspense>;
       case "theme-124":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme124 /></Suspense>;
       case "theme-125":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme125 /></Suspense>;
       case "theme-126":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme126 /></Suspense>;
       case "theme-127":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme127 /></Suspense>;
       case "theme-128":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme128 /></Suspense>;
       case "theme-129":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme129 /></Suspense>;
       case "theme-130":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme130 /></Suspense>;
       case "theme-131":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme131 /></Suspense>;
       case "theme-132":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme132 /></Suspense>;
       case "theme-133":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme133 /></Suspense>;
       case "theme-134":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme134 /></Suspense>;
       case "theme-135":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme135 /></Suspense>;
       case "theme-136":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme136 /></Suspense>;
       case "theme-137":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme137 /></Suspense>;
       case "theme-138":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme138 /></Suspense>;
       case "theme-139":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme139 /></Suspense>;
       case "theme-140":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme140 /></Suspense>;
       case "theme-141":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme141 /></Suspense>;
       case "theme-142":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme142 /></Suspense>;
       case "theme-143":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme143 /></Suspense>;
       case "theme-144":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme144 /></Suspense>;
       case "theme-145":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme145 /></Suspense>;
       case "theme-146":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme146 /></Suspense>;
       case "theme-147":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme147 /></Suspense>;
       case "theme-148":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme148 /></Suspense>;
       case "theme-149":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme149 /></Suspense>;
       case "theme-150":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme150 /></Suspense>;
       case "theme-151":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme151 /></Suspense>;
       case "theme-152":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme152 /></Suspense>;
       case "theme-153":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme153 /></Suspense>;
       case "theme-154":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme154 /></Suspense>;
       case "theme-155":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme155 /></Suspense>;
       case "theme-156":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme156 /></Suspense>;
       case "theme-157":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme157 /></Suspense>;
       case "theme-158":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme158 /></Suspense>;
       case "theme-159":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme159 /></Suspense>;
       case "theme-160":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme160 /></Suspense>;
       case "theme-161":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme161 /></Suspense>;
       case "theme-162":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme162 /></Suspense>;
       case "theme-163":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme163 /></Suspense>;
       case "theme-164":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme164 /></Suspense>;
       case "theme-165":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme165 /></Suspense>;
       case "theme-166":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme166 /></Suspense>;
       case "theme-167":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme167 /></Suspense>;
       case "theme-168":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme168 /></Suspense>;
       case "theme-169":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme169 /></Suspense>;
       case "theme-170":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme170 /></Suspense>;
       case "theme-171":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme171 /></Suspense>;
       case "theme-172":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme172 /></Suspense>;
       case "theme-173":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme173 /></Suspense>;
       case "theme-174":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme174 /></Suspense>;
       case "theme-175":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme175 /></Suspense>;
       case "theme-176":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme176 /></Suspense>;
       case "theme-177":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme177 /></Suspense>;
       case "theme-178":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme178 /></Suspense>;
       case "theme-179":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme179 /></Suspense>;
       case "theme-180":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme180 /></Suspense>;
       case "theme-181":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme181 /></Suspense>;
       case "theme-182":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme182 /></Suspense>;
       case "theme-183":
         return <Suspense fallback={<LoadingFallback />}><HomePageTheme183 /></Suspense>;
       case "theme-184":
         return <Theme184 />;
       case "theme-185":
         return <Theme185 />;
       case "theme-186":
         return <Theme186 />;
       case "theme-187":
         return <Theme187 />;
       case "theme-188":
         return <Theme188 />;
       case "theme-189":
         return <Theme189 />;
       case "theme-190":
         return <Theme190 />;
       case "theme-191":
         return <Theme191 />;
       case "theme-192":
         return <Theme192 />;
       case "theme-193":
         return <Theme193 />;
       case "theme-194":
         return <Theme194 />;
       case "theme-195":
         return <Theme195 />;
       case "theme-196":
         return <Theme196 />;
       case "theme-197":
         return <Theme197 />;
       case "theme-198":
         return <Theme198 />;
       case "theme-199":
         return <Theme199 />;
       case "theme-200":
         return <Theme200 />;
       case "theme-201":
         return <Theme201 />;
       case "theme-202":
         return <Theme202 />;
       default:
         return <HomePageTheme1 />;
    }
  };

  return (
    <>
      <TemplateSwitcher onThemeChange={handleThemeChange} activeTheme={activeTheme} />
      <ThemeErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          {renderTheme()}
        </Suspense>
      </ThemeErrorBoundary>
    </>
  );
}
