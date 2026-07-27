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
        border-gray-100
        shadow-sm
        p-6
        ${className}
      `}
    >
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-gray-900">
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
                  ? 'bg-primary text-white shadow-md'
                  : action.primary
                  ? 'bg-primary-light text-primary hover:bg-primary hover:text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
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
        <div className="mt-6 pt-5 border-t border-gray-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
              💡
            </div>

            <div>
              {tipTitle && (
                <p className="text-sm font-medium text-gray-700">
                  {tipTitle}
                </p>
              )}

              {tipMessage && (
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
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