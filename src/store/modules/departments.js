const testData = {
  success: true,
  message: "",
  departments: [
    {
      id: "064730f3-d069-11e3-80ba-000e1e33854c",
      name: "СМ-Косметология",
      fname: "Клиника «СМ-Косметология» (м. «Войковская»)",
      point: { lat: 55.81606, long: 37.511463 },
      adult: "true",
      kids: "false",
      special: "true",
      surgery: "false",
      dent: "false",
    },
    {
      id: "18225b67-67df-11e3-ae98-000c294f7ee9",
      name: "Солнечногорск",
      fname: "«СМ-Клиника» в Солнечногорске, ул. Красная",
      point: { lat: 56.202045, long: 36.950097 },
      adult: "true",
      kids: "true",
      special: "false",
      surgery: "false",
      dent: "false",
    },
    {
      id: "678129d7-6dea-11e2-ad62-000c291ba476",
      name: "ВДНХ",
      fname: "«СМ-Клиника» на ул. Ярославская (м. «ВДНХ»)",
      point: { lat: 55.814614, long: 37.647603 },
      adult: "true",
      kids: "true",
      special: "true",
      surgery: "true",
      dent: "false",
    },
    {
      id: "678129da-6dea-11e2-ad62-000c291ba476",
      name: "КВ - Поликлиника",
      fname: "«СМ-Клиника» в Старопетровском проезде (м. «Войковская»)",
      point: { lat: 55.82574, long: 37.498078 },
      adult: "true",
      kids: "false",
      special: "false",
      surgery: "false",
      dent: "true",
    },
    {
      id: "678129dd-6dea-11e2-ad62-000c291ba476",
      name: "КЦ - Поликлиника",
      fname: "«СМ-Клиника» на ул. Клары Цеткин (м. «Войковская»)",
      point: { lat: 55.827838, long: 37.514266 },
      adult: "true",
      kids: "false",
      special: "true",
      surgery: "true",
      dent: "true",
    },
    {
      id: "678129e0-6dea-11e2-ad62-000c291ba476",
      name: "Лесная",
      fname: "«СМ-Клиника» на ул. Лесная (м. «Белорусская»)",
      point: { lat: 55.781823, long: 37.593201 },
      adult: "true",
      kids: "false",
      special: "false",
      surgery: "false",
      dent: "false",
    },
    {
      id: "678129e6-6dea-11e2-ad62-000c291ba476",
      name: "СМ-Доктор",
      fname: "Детская клиника «СМ-Доктор» в Марьиной Роще (м. «Марьина Роща»)",
      point: { lat: 55.795864, long: 37.611069 },
      adult: "false",
      kids: "true",
      special: "false",
      surgery: "false",
      dent: "false",
    },
    {
      id: "678129e9-6dea-11e2-ad62-000c291ba476",
      name: "Ярцевская",
      fname: "«СМ-Клиника» на ул. Ярцевская (м. «Молодежная»)",
      point: { lat: 55.736128, long: 37.410035 },
      adult: "true",
      kids: "true",
      special: "false",
      surgery: "false",
      dent: "true",
    },
    {
      id: "881e30f1-8a21-11e2-9798-005056bd755c",
      name: "Текстильщики",
      fname: "«СМ-Клиника» на Волгоградском проспекте (м. «Текстильщики»)",
      point: { lat: 55.708759, long: 37.725074 },
      adult: "true",
      kids: "true",
      special: "true",
      surgery: "true",
      dent: "true",
    },
    {
      id: "aa6abda9-6329-11e3-9407-000c294f7ee9",
      name: "ВДНХ - Стоматология",
      fname: "«СМ-Стоматология» на ул. Ярославская",
      point: { lat: 55.814614, long: 37.647603 },
      adult: "true",
      kids: "true",
      special: "true",
      surgery: "true",
      dent: "true",
    },
  ],
};

const getDepartmentsTest = () => {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve({ data: testData });
    }, 1000);
  });
};

export default {
  namespaced: true,
  state: {
    isLoading: true,
  },
  mutations: {
    setDepartments(state, data) {
      state.departments = data;
      state.isLoading = false;
    },
  },
  actions: {
    async initDepartments({ commit, rootState }) {
      //   const response = await fetch("http://www.smclinic.ru/api2/clinics.json");
      //   const data = await response.json();
      const { data } = await getDepartmentsTest();

      commit("setDepartments", data);
      console.log(rootState);
    },
  },
};
