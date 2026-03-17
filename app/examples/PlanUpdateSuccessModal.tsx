import { Button } from "@envato/design-system/components";

import styles from "./CancelSubscriptionPage.module.scss";

const figmaCheckmarkCircleHref =
  "https://www.figma.com/api/mcp/asset/dfef6828-2b27-4fb7-bcce-7ac1c2ace157";
const figmaCloseHref =
  "https://www.figma.com/api/mcp/asset/0f42c3e7-d508-4dc5-80a8-e68e772667e0";

type Props = {
  isOpen: boolean;
  onDone: () => void;
  onDismiss: () => void;
};

export function PlanUpdateSuccessModal({ isOpen, onDismiss, onDone }: Props) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className={styles["successModalOverlay"]}
      onClick={onDismiss}
      role="dialog"
    >
      <div
        className={styles["successModal"]}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles["successModalInner"]}>
          <div className={styles["successModalTopRow"]}>
            <div className={styles["successBadge"]}>
              <img alt="" src={figmaCheckmarkCircleHref} />
            </div>

            <button
              aria-label="Close"
              className={styles["successCloseButton"]}
              onClick={onDismiss}
              type="button"
            >
              <img alt="" src={figmaCloseHref} />
            </button>
          </div>

          <h2 className={styles["successTitle"]}>
            Your plan has been successfully updated
          </h2>

          <p className={styles["successBody"]}>
            A confirmation email will be sent to
            <br />
            john.doe@gmail.com
          </p>

          <div className={styles["successDoneButton"]}>
            <Button onClick={onDone} size="medium" variant="primary">
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
