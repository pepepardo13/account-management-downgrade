import { Button } from "@envato/design-system/components";

import styles from "./AccountManagementPage.module.scss";

const figmaCheckmarkCircleHref =
  "https://www.figma.com/api/mcp/asset/dfef6828-2b27-4fb7-bcce-7ac1c2ace157";
const figmaCloseHref =
  "https://www.figma.com/api/mcp/asset/0f42c3e7-d508-4dc5-80a8-e68e772667e0";

type Props = {
  chargeAmount: string;
  isOpen: boolean;
  onConfirmCancel: () => void;
  onDismiss: () => void;
  onDone: () => void;
  step: "confirm" | "success" | null;
};

export function PlanChangeCancellationModal({
  chargeAmount,
  isOpen,
  onConfirmCancel,
  onDismiss,
  onDone,
  step,
}: Props) {
  if (!isOpen || !step) {
    return null;
  }

  const isSuccessStep = step === "success";

  return (
    <div
      aria-modal="true"
      className={styles["changeRequestModalOverlay"]}
      onClick={onDismiss}
      role="dialog"
    >
      <div
        className={styles["changeRequestModal"]}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles["changeRequestModalInner"]}>
          <div className={styles["changeRequestModalTopRow"]}>
            {isSuccessStep ? (
              <div className={styles["changeRequestSuccessBadge"]}>
                <img alt="" src={figmaCheckmarkCircleHref} />
              </div>
            ) : (
              <span />
            )}

            <button
              aria-label="Close"
              className={styles["changeRequestCloseButton"]}
              onClick={onDismiss}
              type="button"
            >
              <img alt="" src={figmaCloseHref} />
            </button>
          </div>

          <h2 className={styles["changeRequestTitle"]}>
            {isSuccessStep ? "Subscription resumed" : "Are you sure?"}
          </h2>

          <p className={styles["changeRequestBody"]}>
            {isSuccessStep ? (
              <>
                Your change of plan has been cancelled, your next billing period
                will resume on <strong>March 17, 2026 at UTC.</strong>
              </>
            ) : (
              <>
                By cancelling the change request, you will be charged{" "}
                <strong>{chargeAmount}/month</strong> (excluding tax) from{" "}
                <strong>March 17, 2026 at UTC</strong> onward.
              </>
            )}
          </p>

          {isSuccessStep ? (
            <div className={styles["changeRequestDoneButton"]}>
              <Button onClick={onDone} size="medium" variant="primary">
                Done
              </Button>
            </div>
          ) : (
            <div className={styles["changeRequestActions"]}>
              <div className={styles["changeRequestPrimaryButton"]}>
                <Button onClick={onConfirmCancel} size="medium" variant="primary">
                  Cancel change request
                </Button>
              </div>
              <div className={styles["changeRequestSecondaryButton"]}>
                <Button onClick={onDismiss} size="medium" variant="tertiary">
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
