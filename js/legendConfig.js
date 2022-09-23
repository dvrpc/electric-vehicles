const legendConfig = {
  // General / Overlay
  "charging": {
    legendType:"circle",
    iconType: "circle",
    label: "Charging Locations",
    color: "#c8ffaf",
  },
  "dvrpc-current": {
    legendType:"circle",
    iconType: "circle",
    label: "Current PEVs (Centroid)",
    color: "#EA563D",
  },

  // Geo layers
  "CurrentPEV-BG": {
    label: "Current PEVs",
    legendType:"scale",
    class:"gb",
    paintType: 'cur',
    perc: false
  },
  "CurrentPEV-Pop": {
    label: "Current PEVs per 100 People",
    legendType:"scale",
    class:"gb",
    paintType: 'curPop',
    perc: false
  },
  "CurrentPEV-HH": {
    label: "Current PEVs per Household",
    legendType:"scale",
    class:"gb",
    paintType: 'curHH',
    perc: false
  },
  "CurrentPEV-SM": {
    label: "Current PEVs per Sq. Mi.",
    legendType:"scale",
    class:"gb",
    paintType: 'curSM',
    perc: false
  },
  "CurrentPEV-Veh": {
    label: "Percentage of Passengers that are PEVs",
    legendType:"scale",
    class:"gb",
    paintType: 'curVeh',
    perc: true
  },
  "FuturePEV-BG": {
    label: "Future PEVs",
    legendType:"scale",
    class:"gb",
    paintType: 'fut',
    perc: false
  },
  "FuturePEV-Pop": {
    label: "Future PEVs per 100 People",
    legendType:"scale",
    class:"gb",
    paintType: 'futPop',
    perc: false
  },
  "FuturePEV-HH": {
    label: "Future PEVs per Household",
    legendType:"scale",
    class:"gb",
    paintType: 'futHH',
    perc: false
  },
  "FuturePEV-SM": {
    label: "Future PEVs per Sq. Mi.",
    legendType:"scale",
    class:"gb",
    paintType: 'futSM',
    perc: false
  },
  "FuturePEV-Veh": {
    label: "Percentage of Passengers that are PEVs",
    legendType:"scale",
    class:"gb",
    paintType: 'futVeh',
    perc: true
  },
  "FC-KD-SM": {
    label: "Free Charging - kWh of Workplace Charging Demand per Sq. Mi.",
    legendType:"scale",
    class:"yor",
    paintType: 'FC_KD_SM',
    perc: false,
  },
  "FC-KD-JB": {
    label: "Free Charging - kWh of Workplace Charging Demand per Job",
    legendType:"scale",
    class:"brg",
    paintType: 'FC_KD_JB',
    perc: false,
  },
  "FC-CE-SM": {
    label: "Free Charging - Workplace Charging Events per Sq. Mi.",
    legendType:"scale",
    class:"yor",
    paintType: 'FC_CE_SM',
    perc: false,
  },
  "FC-CE-JB": {
    label: "Free Charging - Workplace Charging Events per Job",
    legendType:"scale",
    class:"brg",
    paintType: 'FC_CE_JB',
    perc: false,
  },
  "PC-KD-SM": {
    label: "Paid Charging - kWh of Workplace Charging Demand per Sq. Mi.",
    legendType:"scale",
    class:"yor",
    paintType: 'PC_KD_SM',
    perc: false,
  },
  "PC-KD-JB": {
    label: "Paid Charging - kWh of Workplace Charging Demand per Job",
    legendType:"scale",
    class:"brg",
    paintType: 'PC_KD_JB',
    perc: false,
  },
  "PC-CE-SM": {
    label: "Paid Charging - Workplace Charging Event per Sq. Mi.",
    legendType:"scale",
    class:"yor",
    paintType: 'PC_CE_SM',
    perc: false,
  },
  "PC-CE-JB": {
    label: "Paid Charging - Workplace Charging Event per Job",
    legendType:"scale",
    class:"brg",
    paintType: 'PC_CE_JB',
    perc: false,
  }
};

export default legendConfig;
