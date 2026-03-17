import { useState } from "react";

import { Button, Icon } from "@envato/design-system/components";

import { useExternalUrls } from "../contexts/ExternalUrlsContext.tsx";

import envatoHref from "../components/Navigation/HomeLink/envato.svg";

import cameraImage from "./assets/cancel-subscription-camera.jpg";
import pauseImage from "./assets/cancel-subscription-pause.jpg";
import styles from "./CancelSubscriptionPage.module.scss";

const figmaInfoHref =
  "https://www.figma.com/api/mcp/asset/5b96f02b-0d9e-4791-8f77-f3d7cd96e0d3";
const annualPlanImageHref =
  "https://www.figma.com/api/mcp/asset/b2eb0642-7c63-4a85-acfe-d500759e36fd";

type Props = {
  onBack?: () => void;
  onChangeToCore?: () => void;
  onChangeToPlus?: () => void;
  onKeepSubscription?: () => void;
  showAnnualSwitchBanner?: boolean;
};

const cancelReasons = [
  "Not enough assets I need",
  "Poor experience/s with a digital asset",
  "Poor experience/s on Envato Elements",
  "No budget",
  "Searching is too difficult",
  "Found a better source of digital assets",
  "Not using enough",
  "Subscribed for a project and it’s now complete",
  "Other",
] as const;

const resubscribeOptions = ["Unsure", "Yes", "No"] as const;

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

function RadioOption({
  checked,
  name,
  label,
  onChange,
}: {
  checked: boolean;
  name: string;
  label: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className={styles["radioOption"]}>
      <input
        checked={checked}
        className={styles["radioInput"]}
        name={name}
        onChange={() => onChange(label)}
        type="radio"
      />
      <span className={styles["radioLabel"]}>{label}</span>
    </label>
  );
}

export function CancelSubscriptionPage({
  onBack,
  onChangeToCore,
  onChangeToPlus,
  onKeepSubscription,
  showAnnualSwitchBanner = false,
}: Props) {
  const externalUrls = useExternalUrls();
  const [reason, setReason] = useState("");
  const [futurePlan, setFuturePlan] =
    useState<(typeof resubscribeOptions)[number]>("Unsure");
  const [feedback, setFeedback] = useState("");

  const pricingUrl = new URL("/pricing", externalUrls.storefront).toString();
  const switchToAnnualUrl = `${externalUrls.myAccount}#switch-to-annual`;
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
            <h1 className={styles["pageTitle"]}>Cancel Subscription</h1>

            <div className={styles["infoBanner"]}>
              <div className={styles["infoIcon"]}>
                <img alt="" src={figmaInfoHref} />
              </div>
              <p className={styles["infoText"]}>
                Your subscription renews monthly. Your next payment of $00.00
                (excluding tax) is scheduled for Feb 16, 2025 - in 20 days.
              </p>
            </div>

            <section className={styles["promoSection"]}>
              <article className={styles["promoCard"]}>
                <div className={styles["promoContent"]}>
                  <div className={styles["promoText"]}>
                    <h2 className={styles["promoTitle"]}>Find the right fit</h2>
                    <p className={styles["promoDescription"]}>
                      Make sure you’re on the plan that works best for you.{" "}
                      <a href={pricingUrl}>Compare options</a> and adjust
                      anytime.
                    </p>
                  </div>
                  <div className={styles["promoActions"]}>
                    <div
                      className={`${styles["promoActionButton"]} ${styles["promoPrimaryButton"]}`}
                      onClick={onChangeToPlus}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          onChangeToPlus?.();
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <Button
                        onClick={onChangeToPlus}
                        size="medium"
                        variant="primary"
                      >
                        Change to Plus
                      </Button>
                    </div>
                    <div
                      className={`${styles["promoActionButton"]} ${styles["promoOutlineButton"]}`}
                      onClick={onChangeToCore}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          onChangeToCore?.();
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <Button
                        onClick={onChangeToCore}
                        size="medium"
                        variant="tertiary"
                      >
                        Change to Core
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={styles["promoImageWrap"]}>
                  <img alt="" className={styles["promoImage"]} src={cameraImage} />
                </div>
              </article>

              <article className={styles["promoCard"]}>
                <div className={styles["promoContent"]}>
                  <div className={styles["promoText"]}>
                    <h2 className={styles["promoTitle"]}>
                      {showAnnualSwitchBanner
                        ? "Save more with Annual plan!"
                        : "Before you go..."}
                    </h2>
                    <p className={styles["promoDescription"]}>
                      {showAnnualSwitchBanner ? (
                        "You could be paying less. Switch to annual and save, or explore other plans."
                      ) : (
                        <>
                          We know circumstances change. Pause your subscription
                          for up to three months.
                        </>
                      )}
                    </p>
                  </div>
                  {showAnnualSwitchBanner ? (
                    <div
                      className={`${styles["promoActions"]} ${styles["promoSingleAction"]}`}
                    >
                      <div
                        className={`${styles["promoActionButton"]} ${styles["promoOutlineButton"]}`}
                        onClick={() => window.location.assign(switchToAnnualUrl)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            window.location.assign(switchToAnnualUrl);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        <Button
                          onClick={() => window.location.assign(switchToAnnualUrl)}
                          size="medium"
                          variant="tertiary"
                        >
                          <span className={styles["buttonWithLeadingIcon"]}>
                            <Icon name="swap-horizontal" size="1x" />
                            <span>Change to annual</span>
                          </span>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className={styles["promoActions"]}>
                      <div
                        className={`${styles["promoActionButton"]} ${styles["promoPauseButton"]}`}
                      >
                        <Button size="medium" variant="tertiary">
                          <span className={styles["pauseButtonContent"]}>
                            <span aria-hidden="true" className={styles["pauseIcon"]}>
                              <span className={styles["pauseIconBars"]}>
                                <span className={styles["pauseIconBar"]} />
                                <span className={styles["pauseIconBar"]} />
                              </span>
                            </span>
                            <span className={styles["pauseButtonLabel"]}>
                              Pause subscription
                            </span>
                          </span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles["promoImageWrap"]}>
                  <img
                    alt=""
                    className={styles["promoImage"]}
                    src={showAnnualSwitchBanner ? annualPlanImageHref : pauseImage}
                  />
                </div>
              </article>
            </section>

            <section className={styles["section"]}>
              <h2 className={styles["sectionTitle"]}>
                What will happen after I cancel?
              </h2>

              <div className={styles["copyGroup"]}>
                <h3 className={styles["subheading"]}>Until Feb 15, 2025:</h3>
                <ul className={styles["bulletList"]}>
                  <li>Your subscription remains active</li>
                  <li>
                    Continue downloading and licensing items for the team
                  </li>
                  <li>There will not be any refunds</li>
                  <li>
                    For questions, please{" "}
                    <a href="https://help.elements.envato.com/hc/en-us/requests/new">
                      contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles["copyGroup"]}>
                <h3 className={styles["subheading"]}>After Feb 11, 2025:</h3>
                <ul className={styles["bulletList"]}>
                  <li>
                    Your payment method will no longer be charged unless you
                    resubscribe
                  </li>
                  <li>
                    You will be able to see{" "}
                    <a href="https://elements.envato.com/account/downloads">
                      a list of items your team has previously licensed
                    </a>{" "}
                    and continue using them for the projects they’re licensed for
                  </li>
                  <li>
                    You will not be able to download any item, including
                    previously licensed items
                  </li>
                  <li>
                    You will not be able to create new licenses for any item,
                    including previously licensed items
                  </li>
                  <li>
                    If you resubscribe, you will be charged a new subscription
                    price (whatever the latest is at the time)
                  </li>
                </ul>
              </div>
            </section>

            <hr className={styles["divider"]} />

            <section className={styles["section"]}>
              <h2 className={styles["sectionTitle"]}>Help us improve!</h2>
              <p className={styles["bodyText"]}>
                Your answers may directly lead to improvements for Envato Elements
                subscribers and will enable us to continually improve the
                experience.
              </p>

              <div className={styles["formGroup"]}>
                <label className={styles["question"]}>
                  What’s your main reason for canceling? (Choose one)
                  <span className={styles["required"]}>*</span>
                </label>
                <div className={styles["radioGroup"]}>
                  {cancelReasons.map((option) => (
                    <RadioOption
                      checked={reason === option}
                      key={option}
                      label={option}
                      name="cancel-reason"
                      onChange={setReason}
                    />
                  ))}
                </div>
              </div>

              <div className={styles["formGroup"]}>
                <label className={styles["question"]}>
                  Might you resubscribe to Envato Elements in the future?
                  <span className={styles["required"]}>*</span>
                </label>
                <div className={styles["radioGroup"]}>
                  {resubscribeOptions.map((option) => (
                    <RadioOption
                      checked={futurePlan === option}
                      key={option}
                      label={option}
                      name="future-plan"
                      onChange={(value) =>
                        setFuturePlan(value as (typeof resubscribeOptions)[number])
                      }
                    />
                  ))}
                </div>
              </div>

              <div className={styles["feedbackGroup"]}>
                <label className={styles["feedbackLabel"]} htmlFor="feedback">
                  We’d love your suggestions or feedback to know how we can
                  improve!
                </label>
                <textarea
                  className={styles["feedbackInput"]}
                  id="feedback"
                  onChange={(event) => setFeedback(event.target.value)}
                  value={feedback}
                />
                <p className={styles["helperText"]}>
                  We can’t reply via this survey. Visit our{" "}
                  <a href={externalUrls.helpCenterHome}>Help Center</a> for help.
                </p>
              </div>

              <div className={styles["bottomActions"]}>
                <div className={styles["bottomPrimaryButton"]}>
                  <Button size="large" variant="primary">
                    Cancel my subscription
                  </Button>
                </div>
                <div className={styles["bottomOutlineButton"]}>
                  <Button
                    onClick={onKeepSubscription}
                    size="large"
                    variant="tertiary"
                  >
                    Keep my subscription
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
            © 2026 Envato Trademarks and brands are the property of their
            respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
