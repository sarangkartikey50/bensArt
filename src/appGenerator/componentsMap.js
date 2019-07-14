import React from "react";
import AppBarBasic from "../components/AppBar/appBarBasic";
import LandingBasic from "../components/Landing/landingBasic";
import QuoteBasic from "../components/Quotes/quoteBasic";
import FooterBasic from "../components/Footer/footerBasic";
import CardContainerComplex from "../containers/cardContainerComplex";
import CardContainerBasic from "../containers/cardContainerBasic";
import CardContainerTestimonial from "../containers/cardContainerTestimonial";

export const ComponentsMap = {
  AppBarBasic: {
    component: <AppBarBasic />,
    import: {
      path: "../components/AppBar/appBarBasic"
    },
    custom: false,
    customizations: {
      visibility: {
      }
    },
    style: {},
    initData: {
      headerText: "Logo",
      headerIcon: "",
      items: [
        {
          name: "Lorem",
          url: "#"
        },
        {
          name: "Dolor",
          url: "#"
        },
        {
          name: "Conecstor",
          url: "#"
        },
        {
          name: "Donec",
          url: "#"
        }
      ]
    }
  },
  LandingBasic: {
    component: <LandingBasic />,
    import: {
      path: "../components/Landing/landingBasic"
    },
    custom: false,
    customizations: {
      visibility: {}
    },
    style: {},
    initData: {
      backgroundImage:
        "https://cdn.dribbble.com/users/1661487/screenshots/5681314/_____20181211113438_2x.jpg"
    }
  },
  QuoteBasic: {
    component: <QuoteBasic />,
    import: {
      path: "../components/Quotes/quoteBasic"
    },
    custom: false,
    customizations: {
      visibility: {}
    },
    style: {},
    initData: {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed fringilla mi.",
      author: "Lorem Consectur"
    }
  },
  FooterBasic: {
    component: <FooterBasic />,
    import: {
      path: "../components/Footer/footerBasic"
    },
    custom: false,
    customizations: {
      visibility: {}
    },
    style: {},
    initData: {}
  },
  CardContainerComplex: {
    component: <CardContainerComplex />,
    import: {
      path: "../containers/cardContainerComplex"
    },
    custom: false,
    customizations: {
      visibility: {}
    },
    style: {},
    initData: {
      header: "Consectur",
      import: {
        path: ""
      },
      custom: false,
      customizations: {
        visibility: {}
      },
      style: {},
      items: [
        {
          cardImage:
            "https://upload.wikimedia.org/wikipedia/commons/3/36/Leh_Palace_2011.jpg",
          cardHeader: {
            header: "elementum magna",
            subHeader: "",
            avatar: ""
          },
          cardBody:
            "vel placerat felis nunc et leo. Nulla facilisi. Mauris sollicitudin nec risus feugiat pulvinar. Nam non consectetur mi, in mattis orci.",
          cardAction: {
            name: "Learn More",
            url: "#"
          }
        },
        {
          cardImage: "http://ttnotes.com/images/shanti-stupa-leh.jpg",
          cardHeader: {
            header: "Interdum et",
            subHeader: "",
            avatar: ""
          },
          cardBody:
            "ed sit amet erat sed nibh dictum malesuada id sollicitudin sapien. Fusce neque ligula, rhoncus nec pulvinar vitae, commodo eu ipsum.",
          cardAction: {
            name: "Learn More",
            url: "#"
          }
        },
        {
          cardImage:
            "https://upload.wikimedia.org/wikipedia/commons/c/c4/Hall_of_Fame_Museum%2C_Leh.jpg",
          cardHeader: {
            header: "Curabitur vitae",
            subHeader: "",
            avatar: ""
          },
          cardBody:
            "Curabitur vitae leo aliquet, dictum arcu at, porta sapien. Curabitur facilisis quam sollicitudin sapien porttitor sagittis.",
          cardAction: {
            name: "Learn More",
            url: "#"
          }
        },
        {
          cardImage:
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Pangong_Tso_2.jpg",
          cardHeader: {
            header: "Maecenas vel",
            subHeader: "",
            avatar: ""
          },
          cardBody:
            "Maecenas vel pretium velit. Proin purus orci, mattis ac congue malesuada, efficitur eget elit. Nunc auctor mattis magna, sit amet tincidunt turpis lobortis id.",
          cardAction: {
            name: "Learn More",
            url: "#"
          }
        },
        {
          cardImage: "http://i.imgur.com/9e0aCiC.jpg",
          cardHeader: {
            header: "lobortis tincidunt",
            subHeader: "",
            avatar: ""
          },
          cardBody:
            "In lobortis tincidunt lectus eu malesuada. Vestibulum molestie nisl eu convallis auctor. Nullam tincidunt pretium eros, eget pharetra ex convallis vel.",
          cardAction: {
            name: "Learn More",
            url: "#"
          }
        }
      ]
    }
  },
  CardContainerBasic: {
    component: <CardContainerBasic />,
    import: {
      path: ""
    },
    custom: false,
    customizations: {
      visibility: {}
    },
    style: {},
    initData: {}
  },
  CardContainerTestimonial: {
    component: <CardContainerTestimonial />,
    import: {
      path: "../containers/cardContainerTestimonial"
    },
    custom: false,
    customizations: {
      visibility: {}
    },
    style: {},
    initData: {
      header: "Testimonial",
      items: [
        {
          avatar:
            "https://cdn.dribbble.com/users/2009763/screenshots/4304250/joel_signature.gif",
          name: "Maecenas",
          body: "",
          gradient:
            "https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg"
        },
        {
          avatar:
            "https://cdn.dribbble.com/users/1418633/screenshots/5106121/hi-dribbble-studiotale.gif",
          name: "Augue Magna",
          body: "",
          gradient:
            "https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg"
        },
        {
          avatar:
            "https://cdn.dribbble.com/users/1324146/screenshots/5819188/2_4x.jpg",
          name: "Rutrum Vitae",
          body: "",
          gradient:
            "https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg"
        }
      ]
    }
  }
};
