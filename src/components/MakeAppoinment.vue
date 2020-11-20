<template>
  <div class="form-appoinment">
    <span class="title">Запись на приём</span>
    <div class="category">
      <button
        class="btn"
        :class="{ 'btn-active': isSelectedCategory('adult') }"
        @click="setCategory('adult')"
      >
        Взрослые
      </button>
      <button
        class="btn"
        :class="{ 'btn-active': isSelectedCategory('child') }"
        @click="setCategory('child')"
      >
        Дети
      </button>
    </div>
    <div class="main-form">
      <div class="select-group">
        <v-select
          v-model="selectedDirection"
          placeholder="Выберите направление"
          :options="directions"
          :clearable="false"
          :disabled="isSelectedCategory('')"
        ></v-select>
        <span :class="{ disabled: isSelectedCategory('') }">{{
          directions.length
        }}</span>
      </div>
      <div class="select-group">
        <v-select
          v-model="selectedClinics"
          placeholder="Выберите клинику"
          :options="clinics"
          :clearable="false"
          :disabled="selectedDirection === ''"
          :loading="isLoading"
        ></v-select>
        <span :class="{ disabled: selectedDirection === '' }">{{
          clinics.length
        }}</span>
      </div>
      <div class="select-group">
        <v-select
          v-model="selectedDoctor"
          placeholder="Выберите врача"
          :options="directions"
          :clearable="false"
          :disabled="selectedClinics === ''"
        ></v-select>
        <span :class="{ disabled: selectedClinics === '' }">{{
          clinics.length
        }}</span>
      </div>
      <yandex-map class="ymap" :coords="coords" :zoom="10">
        <ymap-marker
          v-for="(marker, index) in getCoordsClinicks"
          :key="index"
          :marker-id="index"
          :icon="markerIcon"
          :coords="marker"
          hint-content="some hint"
        />
      </yandex-map>
      <div class="checks">
        <div class="input_group">
          <input type="checkbox" />
          <label>Центр хирургии</label>
        </div>
        <div class="input_group">
          <input type="checkbox" />
          <label>Специализированные клиники</label>
        </div>
        <div class="input_group">
          <input type="checkbox" />
          <label>Стоматология</label>
        </div>
        <div class="input_group">
          <input type="checkbox" />
          <label>Приём детей</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      selectedCategory: "",
      selectedDirection: "",
      selectedClinics: "",
      selectedDoctor: "",

      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: "https://www.smclinic.ru/images/clinics/mapIcon.svg",
        imageSize: [45, 45],
      },

      directions: [
        {
          label: "Хирургия",
          code: "hirurg",
        },
        {
          label: "Педиатрия",
          code: "pediatria",
        },
      ],

      clinics: [
        {
          label: "Клиника #1",
          code: "1",
        },
        {
          label: "Клиника #2",
          code: "2",
        },
      ],

      doctors: [
        {
          label: "Михайлова Ирина Петровна",
          code: "mip",
        },
        {
          label: "Гулаев Константин Петрович",
          code: "pediatria",
        },
      ],
      coords: [54.82896654088406, 39.831893822753904],
    };
  },
  computed: {
    isSelectedCategory() {
      return (category) => this.selectedCategory === category;
    },
    ...mapState("departments", ["departments", "isLoading"]),
    getCoordsClinicks() {
      if (this.isLoading) {
        console.log("OK");
        return [];
      }

      const coords = this.departments.departments.map((department) => {
        return [department.point.lat, department.point.long];
      });

      return coords;
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category;
    },
    ...mapActions("departments", ["initDepartments"]),
    async fetch() {
      this.initDepartments();
    },
  },
};
</script>

<style lang="scss" scoped>
.form-appoinment {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 48px;
}

.main-form {
  width: 520px;

  .select-group {
    position: relative;

    &:not(:first-child) {
      margin-top: 24px;
    }

    span {
      font-size: 16px;
      position: absolute;
      right: 40px;
      top: 12px;
    }
  }

  .ymap {
    margin-top: 48px;
  }

  .checks {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 14px;

    .input_group {
      display: flex;
      align-items: center;
    }
  }
}
.vs--disabled {
  opacity: 0.4;
  user-select: none;
}

.disabled {
  opacity: 0.4;
  user-select: none;
}

.category {
  margin: 16px 0;

  .btn {
    background-color: #e8ebe7;
    margin: 0 16px;
    width: 140px;
    padding: 10px;
    border: none;
    color: #406351;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }

  .btn-active {
    background-color: #6ba989;
  }
}
</style>
