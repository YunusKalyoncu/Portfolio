<template>

    <div class="container">

        <!-- Title -->
  
        <h2 class="py-5">Fruit list in Vue- Malus: Apple</h2>


        <table class="table table-bordered">

            <!-- Table Headers -->
            <tr>
                <th>Genus</th>
                <th>Name</th>
                <th>id</th>
                <th>Family</th>
                <th>Order</th>
                <th>carbohydrates</th>
                <th>protein</th>
                <th>fat</th>
                <th>calories</th>
                <th>sugar</th>
            </tr>

            <!-- Table Rows -->
            <tr v-for="fruit of fruitName" v-bind:key="fruit.name">
                <td>{{ fruit.genus }}</td>
                <td>{{ fruit.name }}</td>
                <td>{{ fruit.id }}</td>
                <td>{{ fruit.family }}</td>
                <td>{{ fruit.order }}</td>
                <td>{{ fruit.carbohydrates }}</td>
                <td>{{ fruit.protein }}</td>
                <td>{{ fruit.fat }}</td>
                <td>{{ fruit.calories }}</td>
                <td>{{ fruit.sugar }}</td>
            </tr>

        </table>

    </div>

</template>

<script>

    export default {

        data() {
            
            return {

                fruitName: [

                    { genus: "Malus", name: "Apple", id: 6, family: "Rosaceae", order: "Rosales, nutritions", carbohydrates: 11.4, protein: 0.3, fat: 0.4, calories: 52 ,sugar: 10.3 },
         
                ]

            }

        }

    }

</script>

