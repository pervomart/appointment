<template>
  <div id="app">

    <div>
      <a-button @click="button_age_old">Взрослые</a-button>
      <a-button @click="button_age_young">Дети</a-button>
    </div>

    <div>
      <a-select default-value="" @change="spec_selected" style="min-width:300px;">
        <a-select-option value="">
          Выберите специальность
        </a-select-option>
        <a-select-option :key="id" v-for="(spec,id) in specs" :value="spec.id">
          {{spec.name}}
        </a-select-option>
      </a-select>
    </div>

    <div>
      <a-select default-value="" @change="clinic_selected" style="min-width:300px;">
        <a-select-option value="">
          Выберите клинику
        </a-select-option>
        <a-select-option :key="id" v-for="(clinic,id) in clinics" :value="clinic.id">
          {{clinic.name}}
        </a-select-option>
      </a-select>

    </div>

    <div>
      <a-select default-value="" @change="doctor_selected" style="min-width:300px;">
        <a-select-option value="">
          Выберите врача
        </a-select-option>
        <a-select-option :key="id" v-for="(doctor,id) in doctors" :value="doctor.id">
          {{doctor.name}}
        </a-select-option>
      </a-select>

    </div>

    <yandex-map 
      :coords="coords"
      :zoom="10"
      @click="onClickMap" >
      <ymap-marker 
        :coords="coords" 
        marker-id="123" 
        hint-content="some hint" 
      />
    </yandex-map>
    
  </div>
</template>

<script>

export default {
  data: () => ({
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
    specs: [
      {id:'1',name:'Первый'},
      {id:'2',name:'Второй'}
    ],
    selected_spec: '',
    clinics: [
      {id:'1',name:'Первый'},
      {id:'2',name:'Второй'}
    ],
    selected_clinic: '',
    doctors: [
      {id:'1',name:'Первый'},
      {id:'2',name:'Второй'}
    ],
    selected_doctor: ''
  }),
  methods: {
    onClickMap(e) {
      this.coords = e.get('coords');
    },
    button_age_old() {
      console.log("Кнопка Взрослые");
    },
    button_age_young() {
      console.log("Кнопка Дети");
    },
    spec_selected(e) {
      console.log("Выбрана специальность " + e);
    },
    clinic_selected(e) {
      console.log("Выбрана клиника " + e);
    },
    doctor_selected(e) {
      console.log("Выбран врач " + e);
    },
  },
};

</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}

.ymap-container {
  height: 500px;
}
</style>
