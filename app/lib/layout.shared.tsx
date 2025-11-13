import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center space-x-3">
          {/* Exact V9 logo styling */}
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md shadow-sm border border-blue-400/20">
            <span className="text-white font-bold text-xs tracking-tighter">V9</span>
          </div>
          <span className="text-gray-900 dark:text-white font-semibold text-lg">
            Velocity<span className="text-blue-600 font-bold">9</span>
          </span>
        </div>
      ),
    },
  };
}