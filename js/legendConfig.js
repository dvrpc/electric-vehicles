const legendConfig = {
  // General / Overlay
  "charging": {
    legendType:"circle",
    iconType: "circle",
    label: "Charging Locations",
    color: "#c8ffaf",
  },
  // @update what is? overlay layer?
  "dvrpc-current": {
    legendType:"circle",
    iconType: "circle",
    label: "Current PEVs (Centroid)",
    color: "#EA563D",
  },
  "dvrpc-projected": {
    legendType:"circle",
    iconType: "circle",
    label: "Projected PEVs (Centroid)",
    color: "#3182D1",
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
    label: "Free Charging - kWh of Demand per Sq. Mi.",
    legendType:"scale",
    class:"yor",
    paintType: 'FC_KD_SM',
    perc: false,
    note:"kWh of Workplace Charging Demand per Square Mile"
  },
  "FC-KD-JB": {
    label: "Free Charging - kWh of Demand per Job",
    legendType:"scale",
    class:"brg",
    paintType: 'FC_KD_JB',
    perc: false,
    note:"kWh of Workplace Charging Demand per Job"
  },
  "FC-CE-SM": {
    label: "Free Charging - Charging Event per Sq. Mi.",
    legendType:"scale",
    class:"yor",
    paintType: 'FC_CE_SM',
    perc: false,
    note:"Number of Workplace Charging Events per Square Mile"
  },
  "FC-CE-JB": {
    label: "Free Charging - Charging Event per Job",
    legendType:"scale",
    class:"brg",
    paintType: 'FC_CE_JB',
    perc: false,
    note:"Number of Workplace Charging Events per Job"
  },
  "PC-KD-SM": {
    label: "Paid Charging - kWh of Demand per Sq. Mi.",
    legendType:"scale",
    class:"yor",
    paintType: 'PC_KD_SM',
    perc: false,
    note:"kWh of Workplace Charging Demand per Square Mile"
  },
  "PC-KD-JB": {
    label: "Paid Charging - kWh of Demand per Job",
    legendType:"scale",
    class:"brg",
    paintType: 'PC_KD_JB',
    perc: false,
    note:"kWh of Workplace Charging Demand per Job"
  },
  "PC-CE-SM": {
    label: "Paid Charging - Charging Event per Sq. Mi.",
    legendType:"scale",
    class:"yor",
    paintType: 'PC_CE_SM',
    perc: false,
    note:"Number of Workplace Charging Events per Square Mile"
  },
  "PC-CE-JB": {
    label: "Paid Charging - Charging Event per Job",
    legendType:"scale",
    class:"brg",
    paintType: 'PC_CE_JB',
    perc: false,
    note:"Number of Workplace Charging Events per Job"
  }
};

export default legendConfig;
