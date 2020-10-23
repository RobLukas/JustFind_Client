import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    styles: {
      primary: {
        background: string;
        color: string;
      };
      secondary: {
        background: string;
        color: string;
      };
      dropdown: {
        button: {
          hover: string;
        };
      };
      scrollbar: {
        thumbBackground: string;
        background: string;
        hover: string;
      };
      filter: {
        button: {
          color: string;
        };
        selected: {
          background: string;
          color: string;
        };
      };
      offer: {
        header: {
          title: string;
          filter: {
            brightness: string;
          };
          icons: {
            companyName: string;
            companySize: string;
            companyEMPType: string;
            companySkill: string;
            new: string;
          };
        };
        desc: {
          seperateLine: {
            color: string;
          };
          skillPoint: {
            selected: string;
            unselected: string;
          };
        };
      };
      offers: {
        newTitle: {
          background: string;
          color: string;
        };
        techTitle: {
          background: string;
          border: string;
        };
      };
    };
  }
}
