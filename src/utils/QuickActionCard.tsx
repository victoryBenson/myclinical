import React from 'react';

interface QuickAction {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
  disabled?: boolean;
  active?: boolean;
}

interface QuickActionsCardProps {
  title?: string;
  actions: QuickAction[];
  tipTitle?: string;
  tipMessage?: string;
  className?: string;
}

const QuickActionsCard: React.FC<QuickActionsCardProps> = ({
  title = 'Quick Actions',
  actions,
  tipTitle,
  tipMessage,
  className = '',
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border
        border-slate-200/80
        shadow-sm
        p-6
        ${className}
      `}
    >
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            type="button"
            onClick={action.onClick}
            disabled={action.disabled}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-xl
              text-sm font-medium transition-all duration-200

              ${
                action.active
                  ? 'bg-gradient-to-r from-primary to-primary-400 text-white shadow-[0_18px_30px_theme(colors.primary.DEFAULT/24%)]'
                  : action.primary
                  ? 'bg-primary-soft text-primary-darker hover:bg-gradient-to-r hover:from-primary hover:to-primary-400 hover:text-white'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }

              ${
                action.disabled
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }
            `}
          >
            {action.icon && (
              <span className="text-base flex-shrink-0">
                {action.icon}
              </span>
            )}

            <span className="flex-1 text-left">
              {action.label}
            </span>

            {!action.disabled && (
              <i className="fa fa-chevron-right text-xs opacity-60" />
            )}
          </button>
        ))}
      </div>

      {/* Tip */}
      {(tipTitle || tipMessage) && (
        <div className="mt-6 border-t border-slate-200/80 pt-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary-darker">
              💡
            </div>

            <div>
              {tipTitle && (
                <p className="text-sm font-medium text-slate-700">
                  {tipTitle}
                </p>
              )}

              {tipMessage && (
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {tipMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActionsCard;