"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ClubProfile {
  value: number;
}

const initialState: any = {
  facts: {
    id: "131",
    fullName: "Futbol Club Barcelona",
    street: "Avinguda Arístides Maillol ",
    postalCode: "08028",
    city: "Barcelona",
    phone: "+34 902 189900",
    fax: "+34 934 112219",
    homepage: "fcbarcelona.com",
    founding: "Nov 29, 1899",
    members: "170000",
    membersDate: "Jan 1, 2022",
    countryName: "Spain",
    countryID: "157",
    countryImage:
      "https://tmssl.akamaized.net/images/flagge/verysmall/157.png?lm=1520611569",
    avgAge: "25.08",
    squadSize: "26",
    legionaries: "11",
    internationalRank: "",
    nationalPlayer: 16,
  },
  stadium: {
    id: "68",
    name: "Olímpic Lluís Companys",
    street: "Paseo Olímpico 17-19",
    postalCode: "08038",
    city: "Barcelona",
    phoneTicketCenter: "",
    faxTicketCenter: "",
    homepage: "",
    ticketCenter: "",
    constructionYear: "1929",
    totalCapacity: "49472",
    standingRoom: "0",
    seats: "49472",
    image:
      "https://tmssl.akamaized.net/images/foto/stadionnormal/olimpic-lluis-companys-fc-barcelona-2023-24-1699441256-121418.jpg?lm=1699441275",
  },
  historicImages: [
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792132.png?lm=1400792130",
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792150.png?lm=1400792148",
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792174.png?lm=1400792172",
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792189.png?lm=1400792187",
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792227.png?lm=1400792225",
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792246.png?lm=1400792244",
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792264.png?lm=1400792262",
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792283.png?lm=1400792281",
    "https://tmssl.akamaized.net/images/wappen/medium/131_1400792355.png?lm=1400792353",
  ],
  successes: [
    {
      number: "4",
      name: "Champions League Winner",
      id: "4",
      additionalData: {
        competitionId: "CL",
        competitionTypeId: "10",
        cycle: null,
        seasonIds: ["2014", "2010", "2008", "2005"],
      },
    },
    {
      number: "1",
      name: "European Champion Clubs' Cup winner",
      id: "55",
      additionalData: {
        competitionId: "EPL",
        competitionTypeId: "10",
        cycle: null,
        seasonIds: ["1991"],
      },
    },
    {
      number: "3",
      name: "FIFA Club World Cup winner",
      id: "318",
      additionalData: {
        competitionId: "KLUB",
        competitionTypeId: "10",
        cycle: null,
        seasonIds: ["2015", "2011", "2009"],
      },
    },
    {
      number: "27",
      name: "Spanish Champion",
      id: "11",
      additionalData: {
        competitionId: "ES1",
        competitionTypeId: "1",
        cycle: null,
        seasonIds: [
          "2022",
          "2018",
          "2017",
          "2015",
          "2014",
          "2012",
          "2010",
          "2009",
          "2008",
          "2005",
          "2004",
          "1998",
          "1997",
          "1993",
          "1992",
          "1991",
          "1990",
          "1984",
          "1973",
          "1959",
          "1958",
          "1952",
          "1951",
          "1948",
          "1947",
          "1944",
          "1928",
        ],
      },
    },
    {
      number: "5",
      name: "UEFA Supercup Winner",
      id: "354",
      additionalData: {
        competitionId: "USC",
        competitionTypeId: "13",
        cycle: null,
        seasonIds: ["2015", "2011", "2009", "1997", "1992"],
      },
    },
    {
      number: "4",
      name: "Cup Winners Cup Winner",
      id: "53",
      additionalData: {
        competitionId: "EPP",
        competitionTypeId: "10",
        cycle: null,
        seasonIds: ["1996", "1988", "1981", "1978"],
      },
    },
    {
      number: "31",
      name: "Spanish Cup winner ",
      id: "94",
      additionalData: {
        competitionId: "CDR",
        competitionTypeId: "8",
        cycle: null,
        seasonIds: [
          "2020",
          "2017",
          "2016",
          "2015",
          "2014",
          "2011",
          "2008",
          "1997",
          "1996",
          "1989",
          "1987",
          "1982",
          "1980",
          "1977",
          "1970",
          "1967",
          "1962",
          "1958",
          "1956",
          "1952",
          "1951",
          "1950",
          "1941",
          "1927",
          "1925",
          "1924",
          "1921",
          "1919",
          "1912",
          "1911",
          "1909",
        ],
      },
    },
    {
      number: "14",
      name: "Spanish Super Cup winner",
      id: "93",
      additionalData: {
        competitionId: "SUC",
        competitionTypeId: "9",
        cycle: null,
        seasonIds: [
          "2022",
          "2018",
          "2016",
          "2013",
          "2011",
          "2010",
          "2009",
          "2006",
          "2005",
          "1996",
          "1994",
          "1992",
          "1991",
          "1983",
        ],
      },
    },
    {
      number: "3",
      name: "Inter-Cities Fairs Cup winner",
      id: "49",
      additionalData: {
        competitionId: "MSPO",
        competitionTypeId: "10",
        cycle: null,
        seasonIds: ["1965", "1959", "1957"],
      },
    },
    {
      number: "9",
      name: "Copa Catalunya Winner",
      id: "310",
      additionalData: {
        competitionId: "",
        competitionTypeId: null,
        cycle: null,
        seasonIds: [
          "2013",
          "2012",
          "2006",
          "2004",
          "2003",
          "1999",
          "1992",
          "1990",
          "1984",
        ],
      },
    },
    {
      number: "3",
      name: "Copa Eva Duarte Winner",
      id: "311",
      additionalData: {
        competitionId: "",
        competitionTypeId: null,
        cycle: null,
        seasonIds: ["1953", "1952", "1948"],
      },
    },
  ],
  additionalTeams: [
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/131.png?lm=1406739548",
      name: "FC Barcelona",
      id: "131",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/2464.png?lm=1406739548",
      name: "FC Barcelona Atlètic",
      id: "2464",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/63954.png?lm=1521793876",
      name: "FC Barcelona C (- 2007)",
      id: "63954",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/2470.png?lm=1406739548",
      name: "FC Barcelona U19",
      id: "2470",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/39813.png?lm=1406739548",
      name: "FC Barcelona U18",
      id: "39813",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/14321.png?lm=1406739548",
      name: "FC Barcelona U16",
      id: "14321",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/default.png?lm=1457423031",
      name: "Atlètic Catalunya CF (- 1970)",
      id: "100194",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/42849.png?lm=1457444403",
      name: "CD Condal (- 1970)",
      id: "42849",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/41584.png?lm=1406739548",
      name: "FC Barcelona UEFA U19",
      id: "41584",
    },
    {
      image:
        "https://tmssl.akamaized.net/images/wappen/medium/70295.png?lm=1540469533",
      name: "FC Barcelona Youth",
      id: "70295",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
