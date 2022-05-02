<template>
  <div class="col-lg-6">
    <div class="tariff-card">
      <div class="title-card">{{ tariffItem.name }}</div>
      <div class="price">
        <span class="price-bold">
          {{
            checked
              ? tariffItem.tariff_variants[1].price.toLocaleString()
              : tariffItem.tariff_variants[0].price.toLocaleString()
          }}
          ₽
        </span>
        / лицензия
      </div>
      <ul class="list">
        <li
          class="list-item"
          v-for="item in list.slice(0, this.length)"
          :key="item"
        >
          <span class="icon-check"></span>
          {{ item }}
        </li>
        <li
          class="list-item none"
          v-for="item in list.slice(this.length, this.list.length)"
          :key="item"
        >
          <span class="icon-close"></span>
          {{ item }}
        </li>
      </ul>
      <div class="input-container">
        <div class="title">Кол-во лицензий:</div>
        <div class="input-control">
          <div class="control-minus" @click="countMinus()"></div>
          <input
            class="input"
            type="number"
            name="count"
            min="1"
            v-model="countLicenses"
            :max="tariffItem.maximum_licenses_count"
          />
          <div class="control-plus" @click="countPlus()"></div>
        </div>
      </div>
      <button class="card-button" type="button" @click="changeTariff()">
        Купить за {{ totalPrice() }} ₽
      </button>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/config";
let qs = require("qs");

export default {
  inject: ["$keycloak"],
  props: ["tariffItem", "checked", "list", "lengthList", "orderId"],
  data() {
    return {
      countLicenses: 1,
      length: 0,
    };
  },
  created() {
    this.lengthList.forEach((el) => {
      if (el.id === this.tariffItem.id) {
        this.length = el.length;
      }
    });
  },
  methods: {
    changeTariff: function () {
      let data = {
        order_id: this.orderId,
        tariff_variant_id: this.checked
          ? this.tariffItem.tariff_variants[1].id
          : this.tariffItem.tariff_variants[0].id,
      };
      console.log(data);

      HTTP.post("/order/update", qs.stringify(data), {
        headers: {
          authorization: "Bearer " + this.$keycloak.token,
        },
      })
        .then((response) => {
          if (response.data.pay_form_url) {
            this.changeLicenses();
          } else {
            location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
          location.reload();
        });
    },
    changeLicenses: function () {
      let data = {
        order_id: this.orderId,
        licenses_count: this.countLicenses,
      };

      HTTP.post("/order/update", qs.stringify(data), {
        headers: {
          authorization: "Bearer " + this.$keycloak.token,
        },
      })
        .then((response) => {
          location.href = response.data.pay_form_url;
        })
        .catch((error) => {
          console.log(error);
          location.reload();
        });
    },
    totalPrice: function () {
      if (this.checked) {
        return (
          this.tariffItem.tariff_variants[1].price * this.countLicenses
        ).toLocaleString();
      } else {
        return (
          this.tariffItem.tariff_variants[0].price * this.countLicenses
        ).toLocaleString();
      }
    },
    countPlus: function () {
      if (this.countLicenses + 1 <= this.tariffItem.maximum_licenses_count) {
        this.countLicenses += 1;
      }
    },
    countMinus: function () {
      if (this.countLicenses - 1 >= 1) {
        this.countLicenses -= 1;
      }
    },
  },
  watch: {
    countLicenses: function () {
      if (this.countLicenses > this.tariffItem.maximum_licenses_count) {
        this.countLicenses = this.tariffItem.maximum_licenses_count;
      } else if (this.countLicenses < 1) {
        this.countLicenses = 1;
      }
    },
  },
};
</script>

<style scoped>
.tariff-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 24px;
}

.title-card {
  color: #ff9900;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}

.tariff-card .price {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.56);
  margin-bottom: 40px;
}

.tariff-card .price-bold {
  font-size: 32px;
  color: #000;
}

.tariff-card .list {
  list-style: none;
  padding-left: 0;
}

.tariff-card .list .list-item {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  padding-left: 30px;
  position: relative;
}

.tariff-card .list .list-item.none {
  opacity: 0.3;
}

.icon-check {
  position: absolute;
  display: inline-block;
  width: 14px;
  height: 10px;
  left: 0;
  top: 6px;
}

.icon-check:before {
  position: absolute;
  left: -4px;
  top: 10%;
  height: 80%;
  width: 2px;
  background-color: #000;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
  border-radius: 10px 10px 0 0;
}

.icon-check:after {
  position: absolute;
  left: -4px;
  top: 68%;
  height: 2px;
  width: 80%;
  background-color: #000;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
  border-radius: 0 10px 10px 0;
}

.icon-close {
  position: absolute;
  left: 2px;
  top: 3px;
  width: 12px;
  height: 12px;
}

.icon-close:before,
.icon-close:after {
  position: absolute;
  left: 5px;
  content: "";
  height: 14px;
  width: 2px;
  background-color: #000;
  border-radius: 10px;
}

.icon-close:before {
  transform: rotate(45deg);
}

.icon-close:after {
  transform: rotate(-45deg);
}

.input-container {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 44px;
}

.input-container .title {
  font-weight: 500;
}

.input-container .input-control {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.input-container .input {
  border: none;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  width: 50px;
  background-color: transparent;
}

.input-container .input:focus-visible {
  outline: none;
}

.input-container .input::-webkit-outer-spin-button,
.input-container .input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.card-button {
  display: block;
  text-decoration: none;
  text-align: center;
  color: #ff9900;
  background-color: rgba(255, 153, 0, 0.16);
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 5px;
  margin-top: 16px;
  cursor: pointer;
  border: none;
}

.control-minus,
.control-plus {
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
}

.control-plus::before,
.control-plus::after {
  content: "";
  width: 16px;
  height: 2px;
  background-color: #707070;
  position: absolute;
  top: calc(50% - 1px);
  border-radius: 5px;
}

.control-plus::after {
  transform: rotate(90deg);
}

.control-minus::before {
  content: "";
  width: 16px;
  height: 2px;
  background-color: #d1d1d1;
  position: absolute;
  top: calc(50% - 1px);
  border-radius: 5px;
}
</style>
