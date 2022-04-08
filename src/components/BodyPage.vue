<template>
  <div class="container product-container">
    <template v-if="Object.keys(productList)">
      <ProductContainer :productList="productList"/>
    </template>
    <template v-else>
      <EmptyContainer />
    </template>
  </div>
</template>

<script>
import EmptyContainer from "@/components/EmptyContainer";
import ProductContainer from "@/components/ProductContainer";

export default {
  name: 'BodyPage',
  components: {
    ProductContainer,
    EmptyContainer
  },
  data() {
    let productList = [
      {
        "order_id": 2,
        "user_id": 1,
        "name": "Стройконтроль",
        "app_host": "a101.sk.ru",
        "licenses_count": 8,
        "ops_status": "not_active",
        "orders": [
          {
            "order_id": 2,
            "tariff_variant_id": 1,
            "tariff_variant": {
              "tariff_id": 1,
              "tariff": {
                "product_id": 1,
                "product": {
                  "name": "Стройконтроль"
                },
                "name": "Профессиональный",
                "description": "Фича 1|Фича 2|Фича 3",
                "maximum_licenses_count": 10
              },
              "period": 30,
              "price": 1000
            },
            "operation_type": "buy",
            "payment_method": "bank_card",
            "payment_status": "success",
            "need_change_workspace": false,
            "act_document": null,
            "offer_invoice_document": {
              "document_id": 1,
              "directory": "offer_invoice",
              "filename": "1.pdf",
              "status": "waiting",
              "created_at": "2022-03-27T09:15:43.719Z"
            },
            "work_at": "2022-03-27T09:15:43.719Z",
            "paid_at ": "2022-03-27T09:15:43.719Z",
            "created_at ": "2022-03-27T09:15:43.719Z"
          }
        ]
      },
      {
        "order_id": 3,
        "user_id": 2,
        "name": "Стройконтроль",
        "app_host": "test.sk.ru",
        "licenses_count": 5,
        "ops_status": "active",
        "orders": [
          {
            "order_id": 3,
            "tariff_variant_id": 1,
            "tariff_variant": {
              "tariff_id": 1,
              "tariff": {
                "product_id": 1,
                "product": {
                  "name": "Стройконтроль"
                },
                "name": "Профессиональный",
                "description": "Фича 1|Фича 2|Фича 3",
                "maximum_licenses_count": 10
              },
              "period": 365,
              "price": 1000
            },
            "operation_type": "buy",
            "payment_method": "bank_card",
            "payment_status": "success",
            "need_change_workspace": false,
            "act_document": null,
            "offer_invoice_document": {
              "document_id": 1,
              "directory": "offer_invoice",
              "filename": "1.pdf",
              "status": "waiting",
              "created_at": "2022-03-27T09:15:43.719Z"
            },
            "work_at": "2022-03-27T09:15:43.719Z",
            "paid_at ": "2022-03-27T09:15:43.719Z",
            "created_at ": "2022-03-27T09:15:43.719Z"
          }
        ]
      },
      {
        "order_id": 5,
        "user_id": 3,
        "name": "Управление строительством",
        "app_host": "a101.us.ru",
        "licenses_count": 6,
        "ops_status": "active",
        "orders": [
          {
            "order_id": 5,
            "tariff_variant_id": 1,
            "tariff_variant": {
              "tariff_id": 1,
              "tariff": {
                "product_id": 1,
                "product": {
                  "name": "Управление строительством"
                },
                "name": "Профессиональный",
                "description": "Фича 1|Фича 2|Фича 3",
                "maximum_licenses_count": 10
              },
              "period": 30,
              "price": 1000
            },
            "operation_type": "buy",
            "payment_method": "bank_card",
            "payment_status": "success",
            "need_change_workspace": false,
            "act_document": null,
            "offer_invoice_document": {
              "document_id": 1,
              "directory": "offer_invoice",
              "filename": "1.pdf",
              "status": "waiting",
              "created_at": "2022-03-27T09:15:43.719Z"
            },
            "work_at": "2022-03-27T09:15:43.719Z",
            "paid_at ": "2022-03-27T09:15:43.719Z",
            "created_at ": "2022-03-27T09:15:43.719Z"
          }
        ]
      },
    ];

    return { productList }
  }
}
</script>

<style scoped>
.product-container
{
  padding: 40px 0;
}
</style>