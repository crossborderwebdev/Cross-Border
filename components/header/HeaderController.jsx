import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DesktopHeader from './desktop/DesktopHeader';
import MobileHeader from './mbl/MobileHeader';

// Script Imports
// import CookieScript from "../cookie-script/cookiescript"
// import MunchkinScript from '../scripts/marketo-munchkin';
// import GTMScript from '../scripts/gtm';
// import MarketoScript from '../scripts/marketo-forms';
// import ZoomInfo from '../cookie-script/zoominfo';
// import FactorsAI from '../cookie-script/factors';
// import IntellimizeScript from '../cookie-script/intellimize';
// import OneTrustScript from '../cookie-script/onetrust';
// import HubspotScript from '../scripts/hubspot-forms';
// import TrustpilotScript from '../scripts/trust-pilot';
// import Prefetch from '../cookie-script/prefetch';
// import FeedbucketScript from '../cookie-script/feedbucket';
// import DriftListeners from '../scripts/drift-listeners';
// import CookiebotScript from '../cookie-script/cookiebot';

const dummyData = {
  props: {
    links: [
      {
        "sys": {
          "id": "pyNMJaJyrujRH3GjuSXvD"
        },
        "pageReference": null,
        "linkText": "Solutions",
        "dataAttributes": "data-track-click-label='globalnav2:solutions'",
        "navigationColumnsCollection": {
          "items": [
            {
              "sys": {
                "id": "6lh8T8NM13WGjNxkwk0ipH"
              },
              "title": "Commercial Cards",
              "dataAttributes": "data-track-click-label='globalnav3:commercial_cards'",
              "ctaButton": "Find the right card",
              "ctaImage": {
                "url": "https://images.ctfassets.net/h83dujey17us/7FOiBcbv8q6o45xCndMQoV/272363d7f63247889d4c7d4845ff323f/Group_52599.png",
                "title": "SolutionCCCardImg"
              },
              "pageReference": {
                "__typename": "Page",
                "sys": {
                  "id": "7ByA6BfZ3A4D0dUfIcf8Bd"
                },
                "slug": "commercial-cards",
                "seo": {
                  "title": "Commercial Cards Programs and Virtual Cards From Corpay",
                  "description": "Corpay's commercial card programs allow you to send payments, plus gather and manage data, all in one simple solution. Learn more."
                }
              },
              "navigationItemsCollection": {
                "items": [
                  {
                    "sys": {
                      "id": "2f4OVZ5FiG4rPfAYv45CMu"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Commercial Cards Overview",
                    "description": "Unmatched control over employee expenses, fuel and vendor payments",
                    "dataAttributes": "data-track-click-label='globalnav4:commercial_cards'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "7ByA6BfZ3A4D0dUfIcf8Bd"
                      },
                      "slug": "commercial-cards"
                    },
                    "icon": {
                      "fileName": "CCoverviewIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/OQdcF1A7VSViQrYMnnIVE/1769923d6bc8327049a56aefd0bf94f4/CCoverviewIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "3SD9M9NGNZTT5NJvycPLKA"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Corpay Mastercard®",
                    "description": "Fuel. Travel. Supplies. Vendor payments. All on one powerful card.",
                    "dataAttributes": "data-track-click-label='globalnav4:multi_mastercard'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "5OokzG1SLjB7fsZ61wZb0V"
                      },
                      "slug": "commercial-cards/corpay-mastercard"
                    },
                    "icon": {
                      "fileName": "CCMMIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/nQ4irkpBnhtbzINxU9unB/267593984626dacba7cf0cbb381ec63e/CCMMIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "5TB7pOB09cT4I05EoYOfmH"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Corpay World Elite Mastercard®",
                    "description": "Unlimited cash back, top-tier travel discounts, and flexible controls",
                    "dataAttributes": "data-track-click-label='globalnav4:elite_mastercard'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "33XjCj0oqiNnW8uuMp2H5Y"
                      },
                      "slug": "commercial-cards/world-elite-mastercard"
                    },
                    "icon": {
                      "fileName": "CCWEMicon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/4ATPsVltpcETWigMke6vrv/282fa0e337c142f781e4126924cf297f/CCWEMicon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "10hqoFX5jtMOSHSLxC5C1W"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Virtual Cards",
                    "description": "Streamline procurement, cut paperwork, and earn rebates",
                    "dataAttributes": "data-track-click-label='globalnav4:virtual_cards'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "5dJJ8bBTBPMga3JwCKPjHQ"
                      },
                      "slug": "commercial-cards/virtual-cards"
                    },
                    "icon": {
                      "fileName": "CCoverviewIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/OQdcF1A7VSViQrYMnnIVE/1769923d6bc8327049a56aefd0bf94f4/CCoverviewIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "0bRsSHCSl9ipmUFRg6Tur"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Expense Management",
                    "description": "Behind every card is best-in-class security and robust card controls",
                    "dataAttributes": "data-track-click-label='globalnav4:expense_management'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "5BLQVDddazqbOfCqS2ygK5"
                      },
                      "slug": "commercial-cards/expense-management"
                    },
                    "icon": {
                      "fileName": "CCEMicon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/3K65a0q77YqqPGLjQtsMnO/b55cf0aefb4069ad31dd562eb314744c/CCEMicon.svg"
                    }
                  }
                ]
              }
            },
            {
              "sys": {
                "id": "5oTbnoR1J5WE7lhj675mPu"
              },
              "title": "AP Automation",
              "dataAttributes": "data-track-click-label='globalnav3:ap_automation'",
              "ctaButton": "Help me find a solution",
              "ctaImage": {
                "url": "https://images.ctfassets.net/h83dujey17us/7GTGjjuk2tjehC8U2CGe3o/94e77956cffbe78dba6e0987a78c5ac3/Group_52599.png",
                "title": "AP Image"
              },
              "pageReference": {
                "__typename": "Page",
                "sys": {
                  "id": "3tawNE6P4BLPeykmN4MxOJ"
                },
                "slug": "ap-automation",
                "seo": {
                  "title": "AP Automation | Corpay",
                  "description": "Streamline your accounts payable with Corpay's AP automation solutions. Reduce manual work, cut costs, and gain full control over your financial workflow."
                }
              },
              "navigationItemsCollection": {
                "items": [
                  {
                    "sys": {
                      "id": "5dODKm48VeetGYOzkpiWWN"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "AP Automation Overview",
                    "description": "Automate the entire AP that syncs tasks, teams, and workflows together.",
                    "dataAttributes": "data-track-click-label='globalnav4:ap_automation'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "3tawNE6P4BLPeykmN4MxOJ"
                      },
                      "slug": "ap-automation"
                    },
                    "icon": {
                      "fileName": "CCoverviewIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/OQdcF1A7VSViQrYMnnIVE/1769923d6bc8327049a56aefd0bf94f4/CCoverviewIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "4inn4M5VMGIKzUEVcJjQTh"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Payments Automation",
                    "description": "Streamline how you manage and approve payments.",
                    "dataAttributes": "data-track-click-label='globalnav4:payments_automation'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "1lDSoVj7cpWeVgiNRPZHrq"
                      },
                      "slug": "ap-automation/payments-automation"
                    },
                    "icon": {
                      "fileName": "navDollarIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/6mM6QtEkw60Fj9ibgsBapa/b8d154095fa8ba3204fab335dc104359/navDollarIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "QCZkJvGvMvLm3amC8Wi9I"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Invoice Automation",
                    "description": "Process more invoices in less time, at a fraction of the cost.",
                    "dataAttributes": "data-track-click-label='globalnav4:invoice_automation'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "4VmXneb2Y5ruCIC58FIwje"
                      },
                      "slug": "ap-automation/invoice-automation"
                    },
                    "icon": {
                      "fileName": "navInvoiceIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/3djJo69tZCvW0t5fcFf3c3/297154b347439b484320688432b3ca32/navInvoiceIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "25LEfr8vG7D9t3NruvbHuL"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "PO Automation",
                    "description": "Automate purchases and eliminate mistakes, errors and overpaying.",
                    "dataAttributes": "data-track-click-label='globalnav4:po_automation'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "1qCnvp1bAVjamWfVBveDNK"
                      },
                      "slug": "ap-automation/po-automation"
                    },
                    "icon": {
                      "fileName": "navAutomationIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/ZWeDpvAbq3ym9UkjKrBzz/f91a65d1337fe2069c999544aa843ee2/navAutomationIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "3Kt7zT23kKSTfGMPzzki6t"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Integrations",
                    "description": "We sync with the biggest (and smallest) ERPs and accounting systems.",
                    "dataAttributes": "data-track-click-label='globalnav4:integrations'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "5oPH6QryrNl6YI0Z8Gi33L"
                      },
                      "slug": "ap-automation/integrations"
                    },
                    "icon": {
                      "fileName": "corpay_complete_tick_icon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/3WKpec6eTf0TjVudNPwqk5/8d5344b22ef6dc2bcfabbbfc8d0ab2cf/corpay_complete_tick_icon.svg"
                    }
                  }
                ]
              }
            },
            {
              "sys": {
                "id": "1qwSkgkbyzlEdnH8MdAe41"
              },
              "title": "Cross-Border Payments",
              "dataAttributes": "data-track-click-label='globalnav3:cross_border'",
              "ctaButton": "Talk to an expert",
              "ctaImage": {
                "url": "https://images.ctfassets.net/h83dujey17us/1InHJ6JVmWaccQFmflyRGj/dee31605245f9e26579ccdfa7b193b5c/cross_border_cta_image.png",
                "title": "Cross Border CTA Image"
              },
              "pageReference": null,
              "navigationItemsCollection": {
                "items": [
                  {
                    "sys": {
                      "id": "6LLoCsQbmWSUPUiYToerZN"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Cross-Border Overview",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:cross_border'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navGlobeIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/5BHn1vV3pasSvQdYbXE34W/c77061422ec705035ff1c0c44af2757b/navGlobeIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "4TAeLEfazD2NEVTpyMeywn"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Multi-Currency Accounts",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:multicurrency_accounts'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navMultiCurrencyIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7KdE2eTTvJBItX35hPHdN7/91ead8bf666bdb25cff7772ee7225885/navMultiCurrencyIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "3Y20bvNhq9go1fKqn2fEzk"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Global Payments",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:global_payments'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navGlobePaymentIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/13FzFqPeS46tZMskFMGrTi/b676ede4f97b281bca6badb1341bb1a6/navGlobePaymentIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "1kumBDTV8gNa8BVZrxPcDT"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Global Invoice Automation",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:global_invoice_automation'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navInvoiceIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/3djJo69tZCvW0t5fcFf3c3/297154b347439b484320688432b3ca32/navInvoiceIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "37DkB9qGmBXC3RKd3d1MNo"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Currency Risk Management",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:currency_risk_management'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "39mBjvMUCqix5WCOX6d2KM"
                      },
                      "slug": "cross-border/currency-risk-management"
                    },
                    "icon": {
                      "fileName": "navDollarRoundIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2HgOk4h98b9K4BVgPDSd9l/4a34d9c4d91ab64fdca2595c65d92645/navDollarRoundIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "7bKk9NCgekplznQP0tMBvb"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Currency Capabilities",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:currency_capabilities'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "2t8t3wZEIt927vSleLu2WV"
                      },
                      "slug": "cross-border/currency-capabilities"
                    },
                    "icon": {
                      "fileName": "navCurrencyICapabilitiescon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/4VMjW08PT8bA71ezSVYVnW/55543e8cdd7924859285c0e2e3ac5fc2/navCurrencyICapabilitiescon.svg"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "sys": {
          "id": "2kgIzNPOH0sZxP3jqmOJYW"
        },
        "pageReference": null,
        "linkText": "Industries",
        "dataAttributes": "data-track-click-label='globalnav2:industries'",
        "navigationColumnsCollection": {
          "items": [
            {
              "sys": {
                "id": "2Zobb83Sa4I0UTybXRHPdW"
              },
              "title": "AP Automation & Commercial Cards",
              "dataAttributes": null,
              "ctaButton": "View Case Study",
              "ctaImage": {
                "url": "https://images.ctfassets.net/h83dujey17us/497oNjtZvuxaLbCYre9Rmc/20045aeb2e53bfe0cab91fa758cf99be/default_cc_case_study_001.jpg",
                "title": "default cc case study 001"
              },
              "pageReference": {
                "__typename": "Page",
                "sys": {
                  "id": "1ZbN7uJIdodkShzI3WmkIb"
                },
                "slug": "thirty-madison",
                "seo": {
                  "title": "Thirty Madison Case Study",
                  "description": "How Thirty Madison simplified multi-entity AP with Corpay Complete—centralized invoices, custom approvals, same-day ACH, and a fast NetSuite integration."
                }
              },
              "navigationItemsCollection": {
                "items": [
                  {
                    "sys": {
                      "id": "4h8W8JfxycX4hQDU2gCQZK"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Automotive & Dealerships ",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:automotive'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "6tqa8qL04fr4dodW0EIpm1"
                      },
                      "slug": "industries/automotive"
                    },
                    "icon": {
                      "fileName": "navAutoDealIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7Hz8SGL9148vDMkhn6xIhZ/4aacc2a4f804c25588582ff9498742ff/navAutoDealIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "MVPXAijAu9rpwyVMm0WnL"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Hospitality",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:hospitality'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "3iAnPTAIb1rlxdq1RKynR1"
                      },
                      "slug": "industries/hospitality"
                    },
                    "icon": {
                      "fileName": "navHospitalityIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7kUubPQmQ6dxQs7wSgNQIt/7d0c4622e08d07b70b1c3c120ec1c7ea/navHospitalityIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "7f0ynB0QtY0HYWbFgRAcfc"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Construction",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:construction'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "1TVbXYDLxKTllIwu0yDxOA"
                      },
                      "slug": "industries/construction"
                    },
                    "icon": {
                      "fileName": "navConstructionIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/5QWPLWgAClr27oWT4Poipr/8b42319c314edc271a73164b0e2f82aa/navConstructionIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "nbEssMZ8VL8NKMvL6GJnW"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Education",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:education'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "6AUJYR3LnQEIyHScTVLJFu"
                      },
                      "slug": "industries/education"
                    },
                    "icon": {
                      "fileName": "navEductionIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2zKBpPVNNvNr8W2wFlUKu9/6619c1fa205ca28fa25b663b6f36039c/navEductionIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "1FL4cojT9Vemc2ftQ7ikuB"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Senior Living",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:senior_living'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "2dy95nlWI36M4jNoAPovHq"
                      },
                      "slug": "industries/senior-living"
                    },
                    "icon": {
                      "fileName": "navLivingIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2dSxYqRuIATq3v9PhtDpVp/955d9a15b801953448e100e6de69783b/navLivingIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "6GLwiDocl7dkBoRZjO11k"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Government",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:government'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "5FpGiM6IGIcL7k6sGYNN7B"
                      },
                      "slug": "industries/government"
                    },
                    "icon": {
                      "fileName": "navEductionIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2zKBpPVNNvNr8W2wFlUKu9/6619c1fa205ca28fa25b663b6f36039c/navEductionIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "1BqVeqi2VRL0v3XPSBjQc2"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Manufacturing",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:manufacturing'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "60yMKRTg9w5NhmM0nrZEA1"
                      },
                      "slug": "industries/manufacturing"
                    },
                    "icon": {
                      "fileName": "navManufacturingIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7oavJp8FpGnCirDtFRKeF3/6b84f48c54deedce7c1a72e8285c7c99/navManufacturingIcon.svg"
                    }
                  }
                ]
              }
            },
            {
              "sys": {
                "id": "7plcjEvWPbOXLCPopfwSF7"
              },
              "title": "Cross-Border Payments",
              "dataAttributes": null,
              "ctaButton": "View Case Study",
              "ctaImage": {
                "url": "https://images.ctfassets.net/h83dujey17us/497oNjtZvuxaLbCYre9Rmc/20045aeb2e53bfe0cab91fa758cf99be/default_cc_case_study_001.jpg",
                "title": "default cc case study 001"
              },
              "pageReference": {
                "__typename": "Page",
                "sys": {
                  "id": "1ZbN7uJIdodkShzI3WmkIb"
                },
                "slug": "thirty-madison",
                "seo": {
                  "title": "Thirty Madison Case Study",
                  "description": "How Thirty Madison simplified multi-entity AP with Corpay Complete—centralized invoices, custom approvals, same-day ACH, and a fast NetSuite integration."
                }
              },
              "navigationItemsCollection": {
                "items": [
                  {
                    "sys": {
                      "id": "6gpGYPRMJtaTdxYO3xiFdB"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "NGOs",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:ngos'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navAutoDealIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7Hz8SGL9148vDMkhn6xIhZ/4aacc2a4f804c25588582ff9498742ff/navAutoDealIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "48YJCTzw2SvteUAo7CdxBY"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Financial Institutions",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:financial_institutions'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navHospitalityIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7kUubPQmQ6dxQs7wSgNQIt/7d0c4622e08d07b70b1c3c120ec1c7ea/navHospitalityIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "3ngl6jdV4FJsx0wEbuUSQs"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Sporting Organizations",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:sporting_organizations'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "3kqonMW33NmXWlRH7rsmnr"
                      },
                      "slug": "industries/sporting-organizations"
                    },
                    "icon": {
                      "fileName": "navConstructionIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/5QWPLWgAClr27oWT4Poipr/8b42319c314edc271a73164b0e2f82aa/navConstructionIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "2TRWqpAvceQylk63FPfag0"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "All Industries",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:all_industries'",
                    "externalUrl": null,
                    "openInNewTab": null,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navAutoDealIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7Hz8SGL9148vDMkhn6xIhZ/4aacc2a4f804c25588582ff9498742ff/navAutoDealIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "3YPwXMszaR4a9DDWjhrGNq"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Private Markets",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:private_markets'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navLivingIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2dSxYqRuIATq3v9PhtDpVp/955d9a15b801953448e100e6de69783b/navLivingIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "1jBxO9ZYGJZAXd9ZSBLjGC"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Entertainment & Media",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav4:entertainment_media'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": null,
                    "icon": {
                      "fileName": "navManufacturingIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7oavJp8FpGnCirDtFRKeF3/6b84f48c54deedce7c1a72e8285c7c99/navManufacturingIcon.svg"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "sys": {
          "id": "7xrN5HapWWKLwVD9oy7Cqs"
        },
        "pageReference": null,
        "linkText": "Resources",
        "dataAttributes": "data-track-click-label='globalnav2:resources'",
        "navigationColumnsCollection": {
          "items": [
            {
              "sys": {
                "id": "3tXFuEaY0GmZZWSLEtFMfz"
              },
              "title": "Resources",
              "dataAttributes": null,
              "ctaButton": "Download eBook",
              "ctaImage": {
                "url": "https://images.ctfassets.net/h83dujey17us/2YAzdRcNXjTSyzIkOnRqEG/c4c97531ede3b18ffa7a3f752f125110/WBN_6000x3000_Reduce-Paper-Costs_InvAuto_0623.png",
                "title": "WBN_6000x3000_Reduce-Paper-Costs_InvAuto_0623.png"
              },
              "pageReference": {
                "__typename": "Page",
                "sys": {
                  "id": "itW7PoRWh2FkTsJC9mqRY"
                },
                "slug": "reduce-paper-and-costs-with-invoice-automation",
                "seo": {
                  "title": "Reduce Paper & Costs with Invoice Automation",
                  "description": "See how invoice automation helps reduce paper, cut processing costs and give AP teams better visibility into spend and approvals"
                }
              },
              "navigationItemsCollection": {
                "items": [
                  {
                    "sys": {
                      "id": "bHl1mSIQ3R5rf0cVG7zfl"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Blog",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:blog'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "1vr8LE4YLmei2k7eC40zad"
                      },
                      "slug": "resources/blog"
                    },
                    "icon": {
                      "fileName": "navAutoDealIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7Hz8SGL9148vDMkhn6xIhZ/4aacc2a4f804c25588582ff9498742ff/navAutoDealIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "3mlNjiJn6rIqBBN28b3AZO"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Industry News",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:industry_news'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "1gVYlzp6ngOW4rWQvNJCRR"
                      },
                      "slug": "resources/newsroom"
                    },
                    "icon": {
                      "fileName": "navManufacturingIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7oavJp8FpGnCirDtFRKeF3/6b84f48c54deedce7c1a72e8285c7c99/navManufacturingIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "4lY7ENJpn8zAAQO5coyot4"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "FAQ",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:faq'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "3taVl1FzA3L9ZW6MNvomur"
                      },
                      "slug": "faq"
                    },
                    "icon": {
                      "fileName": "navFaqIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/6JgiRrx2Rs6GhPe3ptaM7G/bf49d978b5f79e826fe9db6358517337/navFaqIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "9j1CYc4HKKCuWHe9NtdiR"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Case Studies",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:case_studies'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "2I5gR4D8jnsCuGRzJJid24"
                      },
                      "slug": "resources/customer-stories"
                    },
                    "icon": {
                      "fileName": "navLivingIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2dSxYqRuIATq3v9PhtDpVp/955d9a15b801953448e100e6de69783b/navLivingIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "78aZLrDwAac0nDlEWOrNvU"
                    },
                    "pageReference": null,
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Currency Research",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:currency_research'",
                    "externalUrl": "https://corpaycurrencyresearch.com/",
                    "openInNewTab": true,
                    "icon": {
                      "fileName": "navEductionIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2zKBpPVNNvNr8W2wFlUKu9/6619c1fa205ca28fa25b663b6f36039c/navEductionIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "4hfKgBzXoGBNkFckguy3Va"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Glossary",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:glossary'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "6QXOsrsWUnXzx3QJqpHqNs"
                      },
                      "slug": "glossary"
                    },
                    "icon": {
                      "fileName": "navGlossaryIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/67AMR0bNfgBg2iDIiXZ7uE/7c65e627c51a46dd7cc4edac7f2a79f1/navGlossaryIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "748PLZTbgJpXoXvLVbOoGa"
                    },
                    "pageReference": null,
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Webcasts & Podcasts",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:webcasts_podcasts' ",
                    "externalUrl": "/resources/webcasts-podcasts",
                    "openInNewTab": false,
                    "icon": {
                      "fileName": "navConstructionIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/5QWPLWgAClr27oWT4Poipr/8b42319c314edc271a73164b0e2f82aa/navConstructionIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "61FotpKlWjye2ac8ezhZY6"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Market Analysis",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:market_analysis'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "2h9nUzW8tIXy8bxbWf0qr1"
                      },
                      "slug": "resources/market-analysis"
                    },
                    "icon": {
                      "fileName": "navMarketAnalysisIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/35qHlHGguu9UXwSpfSp6La/b2a676d8cede115d0c02d50e7d71b657/navMarketAnalysisIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "2XUskTshZvRZeKCBm3PSgQ"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Whitepapers & Ebooks",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:whitepapers_ebooks'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "5jWrfhG1ll6SGsKmvMzu7j"
                      },
                      "slug": "resources/whitepapers"
                    },
                    "icon": {
                      "fileName": "navHospitalityIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7kUubPQmQ6dxQs7wSgNQIt/7d0c4622e08d07b70b1c3c120ec1c7ea/navHospitalityIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "4LLGE6ounKxedq0zQ8rmm9"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Info Sheets",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:info_sheets'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "7CdMqntcHSzBugjzUwin5R"
                      },
                      "slug": "resources/info-sheet"
                    },
                    "icon": {
                      "fileName": "navInfoSheetsIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/poYauK7XoPz2m8wtQXPgJ/103cc05c95dbdb7c1fe126452e6bac4d/navInfoSheetsIcon.svg"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "sys": {
          "id": "7E9Z4Nkf4pavX8nJWB08i0"
        },
        "pageReference": null,
        "linkText": "Company",
        "dataAttributes": "data-track-click-label='globalnav2:company'",
        "navigationColumnsCollection": {
          "items": [
            {
              "sys": {
                "id": "6UriLcWNWKrE8bLtvMWWvl"
              },
              "title": "Company",
              "dataAttributes": null,
              "ctaButton": "Download eBook",
              "ctaImage": {
                "url": "https://images.ctfassets.net/h83dujey17us/2YAzdRcNXjTSyzIkOnRqEG/c4c97531ede3b18ffa7a3f752f125110/WBN_6000x3000_Reduce-Paper-Costs_InvAuto_0623.png",
                "title": "WBN_6000x3000_Reduce-Paper-Costs_InvAuto_0623.png"
              },
              "pageReference": {
                "__typename": "Page",
                "sys": {
                  "id": "itW7PoRWh2FkTsJC9mqRY"
                },
                "slug": "reduce-paper-and-costs-with-invoice-automation",
                "seo": {
                  "title": "Reduce Paper & Costs with Invoice Automation",
                  "description": "See how invoice automation helps reduce paper, cut processing costs and give AP teams better visibility into spend and approvals"
                }
              },
              "navigationItemsCollection": {
                "items": [
                  {
                    "sys": {
                      "id": "2kfNHom7eCvw75OjrN7Ake"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "About Us",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:about_us'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "1GCNlZalq4YOYhPDhyDfCU"
                      },
                      "slug": "about-us"
                    },
                    "icon": {
                      "fileName": "navAutoDealIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7Hz8SGL9148vDMkhn6xIhZ/4aacc2a4f804c25588582ff9498742ff/navAutoDealIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "7I8JfUzY8LSTGoM7OnYGGU"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Executive Team",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:executive_team'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "6iPjeg9CWador6mf9Hdyjv"
                      },
                      "slug": "executive-team"
                    },
                    "icon": {
                      "fileName": "navHospitalityIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7kUubPQmQ6dxQs7wSgNQIt/7d0c4622e08d07b70b1c3c120ec1c7ea/navHospitalityIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "7CtAXxIH6EpPJyObjrIaC5"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Careers",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:careers'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "118uxhGx3mlhVeDGxpzXei"
                      },
                      "slug": "careers"
                    },
                    "icon": {
                      "fileName": "navConstructionIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/5QWPLWgAClr27oWT4Poipr/8b42319c314edc271a73164b0e2f82aa/navConstructionIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "78NnJVsOeJfds87Oc9Dhga"
                    },
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Partnerships",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:partnerships'",
                    "externalUrl": null,
                    "openInNewTab": false,
                    "pageReference": {
                      "__typename": "Page",
                      "sys": {
                        "id": "60kJXi6010d6vcurwf6Hc7"
                      },
                      "slug": "partners"
                    },
                    "icon": {
                      "fileName": "navEductionIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2zKBpPVNNvNr8W2wFlUKu9/6619c1fa205ca28fa25b663b6f36039c/navEductionIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "3h2dC59eDJiuTXiFp8JO6g"
                    },
                    "pageReference": null,
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Newsroom",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:newsroom'",
                    "externalUrl": "/corporate-newsroom",
                    "openInNewTab": false,
                    "icon": {
                      "fileName": "navLivingIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/2dSxYqRuIATq3v9PhtDpVp/955d9a15b801953448e100e6de69783b/navLivingIcon.svg"
                    }
                  },
                  {
                    "sys": {
                      "id": "4bOj1nUdobiiXjdMczTM7A"
                    },
                    "pageReference": null,
                    "navigationColumnsCollection": {
                      "items": []
                    },
                    "linkText": "Investor Relations",
                    "description": null,
                    "dataAttributes": "data-track-click-label='globalnav3:investor_relations'",
                    "externalUrl": "https://investor.corpay.com/",
                    "openInNewTab": false,
                    "icon": {
                      "fileName": "navManufacturingIcon.svg",
                      "url": "https://images.ctfassets.net/h83dujey17us/7oavJp8FpGnCirDtFRKeF3/6b84f48c54deedce7c1a72e8285c7c99/navManufacturingIcon.svg"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}

const HeaderController = ({ children = dummyData }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const locales = [
    { code: 'en-US', label: 'NA', fullName: 'Canada and USA' },
    { code: 'fr-CA', label: 'CAN', fullName: 'Canada - Français' },
    { code: 'en-GB', label: 'GBR', fullName: 'United Kingdom' },
    { code: 'en-CHI', label: 'JEY', fullName: 'Channel Islands' },
    { code: 'en-AU', label: 'AUS', fullName: 'Australia' },
    { code: 'en-NZ', label: 'NZL', fullName: 'New Zealand' },
    { code: 'en-SG', label: 'SGP', fullName: 'Singapore' },
    { code: 'it', label: 'ITA', fullName: 'Europe - Italia' },
    { code: 'es', label: 'ESP', fullName: 'Europe - España' },
    { code: 'en-IE', label: 'IRL', fullName: 'Europe - Ireland' },
    { code: 'sv', label: 'SWE', fullName: 'Europe - Sverige' },
    { code: 'de-CH', label: 'DEU', fullName: 'Europe - Deutsch' },
    { code: 'fr-CH', label: 'FRA', fullName: 'Europe - Français' },
    { code: 'pt', label: 'POR', fullName: 'Europe - Português' },
    { code: 'en-LU', label: 'LUX', fullName: 'Europe - Luxembourg' },
    { code: 'nl-NL', label: 'NLD', fullName: 'Europe - Nederland' },
  ];

  const localeText = {
    'en-US': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'fr-CA': {
      'Talk to an expert': 'Parlez à un expert',
      Login: 'Connexion'
    },
    'en-GB': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'en-AU': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'en-NZ': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'en-SG': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    it: {
      'Talk to an expert': 'Parla con un esperto',
      Login: 'Accedere'
    },
    es: {
      'Talk to an expert': 'Hable con un experto',
      Login: 'Acceso'
    },
    'en-CHI': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'en-IE': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    sv: {
      'Talk to an expert': 'Prata med en expert',
      Login: 'Logga in'
    },
    'fr-CH': {
      'Talk to an expert': 'Parlez à un expert',
      Login: 'Connexion'
    },
    'de-CH': {
      'Talk to an expert': 'Mit einem Experten sprechen',
      Login: 'Anmeldung'
    },
    pt: {
      'Talk to an expert': 'Fale com um especialista',
      Login: 'Entrar'
    },
    'en-LU': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'nl-NL': {
      'Talk to an expert': 'Praat met een expert',
      Login: 'Inloggen'
    }
  };

  const marketoFormsURl = [
    '/',
    '/contact-us',
    '/lp',
    '/register-webcast',
    '/preview',
    '/resources/blog',
    '/resources/customer-stories',
    '/resources/newsroom',
    '/resources/info-sheet',
    '/resources/market-analysis',
    '/resources/whitepapers',
    '/resources/webcasts',
    '/resources/podcasts',
    '/resources/whitepapers',
    '/request-demo',
    '/newsletter',
    '/ap-automation',
    '/commercial-cards',
    '/industries',
    '/corpay-complete',
    '/solution-finder'
  ];

  const hubspotFormsURl = [
    '/resources/blog',
    '/resources/customer-stories',
    '/resources/newsroom',
    '/resources/info-sheet',
    '/resources/market-analysis',
    '/resources/whitepapers',
    '/resources/webcasts',
    '/resources/podcasts',
    '/resources/whitepapers',
    '/newsletter',
    '/preview',
    '/lp'
  ];

  const factorsAIUrl = [
    '/ap-automation/payments-automation',
    '/ap-automation/ap-and-invoice-automation',
    '/ap-automation/procure-to-pay',
    '/industries/construction'
  ];

  const oneTrustUrl = [
    '/privacy-policy/unitedstates',
    '/privacy-policy/canada',
    '/global-sites',
    '/crossborder/privacy-policy/australia',
    '/crossborder/privacy-policy/canada',
    '/crossborder/privacy-policy/europe',
    '/crossborder/privacy-policy/jersey',
    '/crossborder/privacy-policy/unitedkingdom',
    '/crossborder/privacy-policy/unitedstates',
    '/crossborder/privacy-policy/singapore',
    '/privacy-notice/crossborder/GLBA',
    '/privacy-policy',
    '/test-do-not-use-in-production-ot-pages',
    '/corpay-complete/privacy-policy',
    '/corpay-complete/uk-tax-strategy',
    '/corpay-complete/carbon-reduction-plan'
  ];

  let contactUsUrl = '/contact-us';

  const apAutomationPaths = [
    '/industries/automotive',
    '/industries/construction',
    '/industries/hospitality',
    '/industries/technology',
    '/industries/wholesale-distribution',
    '/industries/education',
    '/industries/healthcare-biotech',
    '/industries/manufacturing',
    '/industries/retail'
  ];

  const crossBorderPaths = [
    '/industries/financial-markets',
    '/industries/healthcare',
    '/industries/payroll',
    '/industries/relocation',
    '/industries/translation',
    '/industries/entertainment-media',
    '/industries/fintech',
    '/industries/ngos',
    '/industries/professional-services-firms'
  ];

  if (router.asPath.startsWith('/ap-automation') || apAutomationPaths.includes(router.asPath)) {
    contactUsUrl = '/contact-us/ap-automation';
  } else if (router.asPath.startsWith('/cross-border') || crossBorderPaths.includes(router.asPath)) {
    contactUsUrl = '/contact-us/cross-border';
  } else if (router.asPath.startsWith('/commercial-cards')) {
    contactUsUrl = '/contact-us/commercial-cards';
  } else if (router.locale !== 'en-US' && router.locale !== 'fr-CA' && router.locale !== 'en-GB') {
    contactUsUrl = '/contact-us/cross-border';
  }

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return <div style={{ height: '80px', background: '#dfdddd' }} />;

  return (
    <>
      {/* <Prefetch />
      <CookiebotScript />
      <GTMScript />
      <DriftListeners />
      <CookieScript />
      <IntellimizeScript />
      <TrustpilotScript />

      {process.env.NEXT_PUBLIC_COOKIE_SCRIPT_ENV !== 'prod' && <FeedbucketScript />}

      {marketoFormsURl.some((url) => router.asPath.startsWith(url)) && (
        <>
          <MunchkinScript />
          <MarketoScript />
          <ZoomInfo />
        </>
      )}

      {hubspotFormsURl.some((url) => router.asPath.startsWith(url)) && <HubspotScript />}

      {factorsAIUrl.some((url) => router.asPath === url) && <FactorsAI />}

      {oneTrustUrl.some((url) => router.asPath === url) && (
        <OneTrustScript pathName={router.asPath} />
      )} */}

      {/* Header View Logic */}
      {isMobile ? (
        <MobileHeader
          data={children.props.links}
          locales={locales}
          localeText={localeText}
          contactUsUrl={contactUsUrl}
        />
      ) : (
        <DesktopHeader
          data={children.props.links}
          locales={locales}
          localeText={localeText}
          contactUsUrl={contactUsUrl}
        />
      )}
    </>
  );
};

export default HeaderController;