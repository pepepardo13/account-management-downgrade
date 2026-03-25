import { Button, Icon } from "@envato/design-system/components";

import styles from "./CancelSubscriptionPage.module.scss";

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
              <Icon name="done" size="1x" />
            </div>

            <button
              aria-label="Close"
              className={styles["successCloseButton"]}
              onClick={onDismiss}
              type="button"
            >
              <Icon name="clear" size="1x" />
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
