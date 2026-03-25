import { useState } from "react";

import { Badge, Button, Icon } from "@envato/design-system/components";

import { useExternalUrls } from "../contexts/ExternalUrlsContext.tsx";

import envatoHref from "../components/Navigation/HomeLink/envato.svg";
import { PlanUpdateSuccessModal } from "./PlanUpdateSuccessModal.tsx";

import styles from "./CancelSubscriptionPage.module.scss";

type Props = {
  onBack?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const socialLinks = [
  { href: "https://www.youtube.com/@Envato", icon: "youtube-outlined", label: "YouTube" },
  { href: "https://www.tiktok.com/@envato", icon: "tik-tok", label: "TikTok" },
  { href: "https://www.threads.net/@envato", icon: "threads", label: "Threads" },
  { href: "https://www.facebook.com/envato", icon: "facebook-square", label: "Facebook" },
  { href: "https://x.com/envato", icon: "twitter-x", label: "X" },
  { href: "https://www.pinterest.com/envato/", icon: "pinterest-circle", label: "Pinterest" },
  { href: "https://www.instagram.com/envato/", icon: "instagram", label: "Instagram" },
] as const;

function FooterDivider() {
  return <span aria-hidden="true" className={styles["footerDivider"]} />;
}

function PaymentCardIcon() {
  return (
    <span aria-hidden="true" className={styles["mastercardIcon"]}>
      <span className={styles["mastercardRed"]} />
      <span className={styles["mastercardYellow"]} />
    </span>
  );
}

export function ChangeToPlusPage({ onBack, onCancel, onConfirm }: Props) {
  const externalUrls = useExternalUrls();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const pricingUrl = new URL("/pricing", externalUrls.storefront).toString();
  const footerLinks = [
    { href: externalUrls.storefront, label: "About Elements" },
    { href: pricingUrl, label: "Plans & Pricing" },
    { href: externalUrls.licenseTerms, label: "License Terms" },
    { href: externalUrls.userTerms, label: "Terms & Conditions" },
    { href: externalUrls.privacyPolicy, label: "Privacy Policy" },
    { href: `${externalUrls.privacyPolicy}#cookies`, label: "Cookies" },
    {
      href: externalUrls.personalInformation,
      label: "Do not share my personal information",
    },
    { href: externalUrls.helpCenterHome, label: "Help Center" },
    { href: `${externalUrls.privacyPolicy}#cookie-settings`, label: "Cookie Settings" },
  ];

  return (
    <div className={styles["page"]}>
      <header className={styles["topBar"]}>
        <div className={styles["topBarInner"]}>
          <a
            aria-label="Envato home"
            className={styles["logoLink"]}
            href={externalUrls.storefront}
          >
            <img alt="Envato" src={envatoHref} />
          </a>
          <button className={styles["profileButton"]} type="button">
            <span>Juan</span>
            <Icon color="secondary" name="chevron-down" size="1x" />
          </button>
        </div>
      </header>

      <main className={styles["main"]}>
        <div className={styles["content"]}>
          <button
            aria-label="Back"
            className={styles["backButton"]}
            onClick={onBack}
            type="button"
          >
            <Icon name="chevron-left" size="1x" />
          </button>

          <section className={styles["body"]}>
            <h1 className={styles["pageTitle"]}>
              Change to the Plus individual plan
            </h1>

            <div className={styles["infoBanner"]}>
              <div className={styles["infoIcon"]}>
                <Icon name="info-outlined" size="1x" />
              </div>
              <div className={styles["richInfoText"]}>
                <p>
                  <strong>
                    Current plan: Ultimate Individual, renews monthly.
                  </strong>
                </p>
                <p>
                  Your next payment of $XX.00 (excluding tax and discounts) is
                  scheduled for Oct 30, 2025 - in 30 days.
                </p>
              </div>
            </div>

            <section className={styles["section"]}>
              <h2 className={styles["sectionTitle"]}>Order summary</h2>

              <div className={styles["copyGroup"]}>
                <h3 className={styles["subheading"]}>Confirm your billing cycle</h3>
                <div className={styles["billingCycleGrid"]}>
                  <button
                    className={`${styles["billingCard"]} ${
                      billingCycle === "monthly" ? styles["billingCardSelected"] : ""
                    }`}
                    onClick={() => setBillingCycle("monthly")}
                    type="button"
                  >
                    <div className={styles["billingTopRow"]}>
                      <span className={styles["billingOption"]}>
                        <span className={styles["billingRadio"]}>
                          {billingCycle === "monthly" ? (
                            <span className={styles["billingRadioDot"]} />
                          ) : null}
                        </span>
                        <span>Monthly</span>
                      </span>
                    </div>
                    <p className={styles["billingPrice"]}>$XX.XX/m + local tax</p>
                  </button>

                  <button
                    className={`${styles["billingCard"]} ${
                      billingCycle === "annual" ? styles["billingCardSelected"] : ""
                    }`}
                    onClick={() => setBillingCycle("annual")}
                    type="button"
                  >
                    <div className={styles["billingTopRow"]}>
                      <span className={styles["billingOption"]}>
                        <span className={styles["billingRadio"]}>
                          {billingCycle === "annual" ? (
                            <span className={styles["billingRadioDot"]} />
                          ) : null}
                        </span>
                        <span>Annual</span>
                      </span>
                      <span className={styles["billingSaveBadge"]}>
                        <Badge type="strong" variant="info">
                          Save 50%
                        </Badge>
                      </span>
                    </div>
                    <div className={styles["billingPriceStack"]}>
                      <p className={styles["billingPrice"]}>$XX.XX/m + local tax</p>
                      <p className={styles["billingPrice"]}>
                        Billed annually at $XXX.XX/year + local tax
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <div className={styles["copyGroup"]}>
                <h3 className={styles["subheading"]}>Payment method</h3>
                <div className={styles["paymentMethodRow"]}>
                  <div className={styles["paymentMethodInfo"]}>
                    <PaymentCardIcon />
                    <span>**** **** **** 8757</span>
                  </div>
                  <div className={styles["summaryOutlineButton"]}>
                    <Button size="large" variant="tertiary">
                      <span className={styles["buttonWithLeadingIcon"]}>
                        <Icon name="open-in-new" size="1x" />
                        <span>Update payment method</span>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className={styles["priceBreakdown"]}>
                <h3 className={styles["subheading"]}>
                  Plus Individual monthly subscription
                </h3>

                <div className={styles["priceRow"]}>
                  <span>Price</span>
                  <span>$00.00/year</span>
                </div>

                <div className={styles["priceRow"]}>
                  <span>Tax</span>
                  <span>$0.00/year</span>
                </div>

                <div className={styles["totalRow"]}>
                  <span>Total</span>
                  <span>USD $00.00/year</span>
                </div>
              </div>

              <div className={styles["infoBanner"]}>
                <div className={styles["infoIcon"]}>
                  <Icon name="info-outlined" size="1x" />
                </div>
                <div className={styles["richInfoText"]}>
                  <p>
                    <strong>
                      Your plan will change to Plus Individual on March 30, 2025.
                    </strong>
                  </p>
                  <p>
                    At your next renewal date. The updated price will apply
                    starting with that billing cycle.
                  </p>
                </div>
              </div>

              <p className={styles["bodyText"]}>
                On <strong>Nov 27</strong>, you’ll be charged{" "}
                <strong>USD $00.00</strong>. Your plan renews{" "}
                <strong>monthly</strong>.
              </p>

              <div className={styles["bottomActions"]}>
                <div className={styles["confirmPrimaryButton"]}>
                  <Button
                    onClick={() => setIsSuccessModalOpen(true)}
                    size="large"
                    variant="primary"
                  >
                    Confirm
                  </Button>
                </div>
                <div className={styles["confirmOutlineButton"]}>
                  <Button onClick={onCancel} size="large" variant="tertiary">
                    Cancel
                  </Button>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>

      <footer className={styles["footer"]}>
        <div className={styles["footerInner"]}>
          <nav aria-label="Footer links" className={styles["footerLinks"]}>
            {footerLinks.map((link, index) => (
              <div className={styles["footerLinkItem"]} key={link.label}>
                {index > 0 ? <FooterDivider /> : null}
                <a href={link.href}>{link.label}</a>
              </div>
            ))}
          </nav>

          <div className={styles["footerMeta"]}>
            <div className={styles["socialLinks"]}>
              {socialLinks.map((link) => (
                <a aria-label={link.label} href={link.href} key={link.label}>
                  <Icon name={link.icon} size="1x" />
                </a>
              ))}
            </div>

            <button className={styles["localeButton"]} type="button">
              <Icon name="globe" size="1x" />
              <span>English</span>
              <Icon name="chevron-down" size="1x" />
            </button>
          </div>

          <p className={styles["copyright"]}>
            © 2023 Envato Elements Pty Ltd. Trademarks and brands are the
            property of their respective owners.
          </p>
        </div>
      </footer>

      <PlanUpdateSuccessModal
        isOpen={isSuccessModalOpen}
        onDismiss={() => setIsSuccessModalOpen(false)}
        onDone={() => {
          setIsSuccessModalOpen(false);
          onConfirm?.();
        }}
      />
    </div>
  );
}
