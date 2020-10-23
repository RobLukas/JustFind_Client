export default {
  name: 'Dark Theme',
  styles: {
    primary: {
      background: '#393a3b',
      color: '#b7c4d0',
    },
    secondary: {
      background: '#4d5052',
      color: '#99a1ab',
    },
    dropdown: {
      button: {
        hover: '#393939',
      },
    },
    scrollbar: {
      thumbBackground: '#4d5052',
      background: 'rgba(0, 0, 0, 0.15)',
      hover: 'rgba(0, 0, 0, 0.2)',
    },
    filter: {
      button: {
        color: '#b7c4d0',
      },
      selected: {
        background: 'linear-gradient(to right, #ba68c8, #9c27b0)',
        color: '#ddd',
      },
    },
    offer: {
      header: {
        title: '#fff',
        filter: {
          brightness: '0.85',
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
          color: '#393939',
        },
        skillPoint: {
          selected: '#ff4081',
          unselected: '#393939',
        },
      },
    },
    offers: {
      newTitle: {
        background: '#777',
        color: '#ddd',
      },
      techTitle: {
        background: '#393939',
        border: '#393939',
      },
    },
  },
};
