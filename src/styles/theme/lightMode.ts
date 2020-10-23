export default {
  name: 'Light Theme',
  styles: {
    primary: {
      background: '#f3f6f8',
      color: '#37474f',
    },
    secondary: {
      background: '#fff',
      color: '#99a1ab',
    },
    dropdown: {
      button: {
        hover: '#f3f6f8',
      },
    },
    scrollbar: {
      thumbBackground: '#c1c1c1',
      background: 'rgba(0,0,0,0.07)',
      hover: 'rgba(0,0,0,0.09)',
    },
    filter: {
      button: {
        color: '#777',
      },
      selected: {
        background: 'linear-gradient(to right, #ba68c8, #9c27b0)',
        color: '#fff',
      },
    },
    offer: {
      header: {
        title: '#fff',
        filter: {
          brightness: '1',
        },
        icons: {
          companyName: '#ff5252',
          companySize: '#fb8c00',
          companyEMPType: '#ab47bc',
          companySkill: '#66bb6a',
          new: '#448aff',
        },
      },
      desc: {
        seperateLine: {
          color: '#f3f6f8',
        },
        skillPoint: {
          selected: '#ff4081',
          unselected: '#393939',
        },
      },
    },
    offers: {
      newTitle: {
        background: '#d9ddfc',
        color: '#4256ef',
      },
      techTitle: {
        background: '#fff',
        border: '#e0e0e0',
      },
    },
  },
};
