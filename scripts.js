document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const recipeCards = document.querySelectorAll('.recipe-card');
    const modal = document.getElementById('popup-modal');
    const modalContent = document.getElementById('popup-details');
    const closeButton = document.querySelector('.close-button');

    searchInput.addEventListener('input', () => {
        const keyword = searchInput.value.toLowerCase();
        recipeCards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            if (title.includes(keyword)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    recipeCards.forEach(card => {
        card.querySelector('.recipe-img').addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            // Fetch the details based on the ID (mocked for this example)
            const details = getRecipeDetails(id);
            modalContent.innerHTML = details;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function getRecipeDetails(id) {
        // Mock function to get recipe details based on ID
        const details = {
            1: `
<h2>Basil Pesto Jumbo Salmon Roast Dinner</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>4 oz Heirloom Grape Tomatoes</li>
        <li>2 cloves Garlic</li>
        <li>¼ oz Dill</li>
        <li>12 oz Yukon Gold Potatoes</li>
        <li>6 oz Green Beans</li>
        <li>10 oz Skin-On Salmon Fillets</li>
        <li>1 tbsp Butter</li>
        <li>1 tbsp Olive Oil</li>
        <li>Salt and Pepper</li>
    </ul>
    <h3>Steps:</h3>
    <ol>
        <li>Preheat oven to 425°F. Halve tomatoes, slice garlic, chop dill, and slice potatoes.</li>
        <li>Boil green beans for 1-2 minutes, then cool. Boil potatoes until tender, then cool.</li>
        <li>Sauté tomatoes, green beans, garlic, and half the dill in butter.</li>
        <li>Roast salmon skin-side down with olive oil, salt, and pepper for 8-10 minutes.</li>
        <li>Crisp potatoes in the pan with olive oil and remaining dill.</li>
        <li>Serve salmon with green beans, tomatoes, and potatoes.</li>
    </ol>
            `,
            2: `
                 <h2>Lemon Pepper Chicken</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>Chicken Breasts</li>
        <li>Lemon</li>
        <li>Pepper</li>
        <li>Salt</li>
        <li>Olive Oil</li>
        <li>Mixed Vegetables</li>
    </ul>
    <h3>Steps:</h3>
    <ol>
        <li>Preheat oven to 425°F. Zest and juice the lemon.</li>
        <li>Season chicken with lemon zest, pepper, and salt.</li>
        <li>Sear chicken in a hot pan with olive oil until golden.</li>
        <li>Roast chicken in the oven until cooked through.</li>
        <li>Toss mixed vegetables in lemon juice, salt, and pepper.</li>
        <li>Serve chicken with vegetables.</li>
    </ol>
            `,
            3: `
    <h2>Cal Smart Lemon Butter Basted Salmon</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>Salmon Fillets</li>
        <li>Lemon</li>
        <li>Butter</li>
        <li>Garlic</li>
        <li>Green Beans</li>
        <li>Baby Potatoes</li>
    </ul>
    <h3>Steps:</h3>
    <ol>
        <li>Preheat oven to 425°F. Zest and juice the lemon, mince garlic.</li>
        <li>Roast potatoes until tender.</li>
        <li>Sauté green beans with garlic in butter.</li>
        <li>Sear salmon in a hot pan, then baste with lemon butter.</li>
        <li>Finish salmon in the oven until cooked through.</li>
        <li>Serve salmon with green beans and potatoes.</li>
    </ol>
            `,
            4: `
    <h2>Smart Zesty Chicken Meatballs</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>Ground Chicken</li>
        <li>Lemon</li>
        <li>Breadcrumbs</li>
        <li>Parmesan Cheese</li>
        <li>Mixed Greens</li>
    </ul>
    <h3>Steps:</h3>
    <ol>
        <li>Preheat oven to 425°F. Zest and juice the lemon.</li>
        <li>Mix ground chicken, breadcrumbs, Parmesan, and lemon zest.</li>
        <li>Form meatballs and bake until cooked through.</li>
        <li>Toss mixed greens with lemon juice, olive oil, salt, and pepper.</li>
        <li>Serve meatballs with salad.</li>
    </ol>
            `,
            5: `
  <h2>Steaks and Easy Scalloped Potatoes</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>Steaks</li>
        <li>Yukon Gold Potatoes</li>
        <li>Cream</li>
        <li>Garlic</li>
        <li>Parmesan Cheese</li>
    </ul>
    <h3>Steps:</h3>
    <ol>
        <li>Preheat oven to 425°F. Thinly slice potatoes.</li>
        <li>Layer potatoes in a baking dish with cream, garlic, and Parmesan.</li>
        <li>Bake until potatoes are tender and golden.</li>
        <li>Sear steaks in a hot pan to desired doneness.</li>
        <li>Serve steaks with scalloped potatoes.</li>
    </ol>
            `,
            6: `
     <h2>Pork Spaghetti Bolognese</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>Ground Pork</li>
        <li>Spaghetti</li>
        <li>Tomatoes</li>
        <li>Garlic</li>
        <li>Onion</li>
        <li>Basil</li>
    </ul>
    <h3>Steps:</h3>
    <ol>
        <li>Cook spaghetti according to package instructions.</li>
        <li>Sauté garlic and onion until softened.</li>
        <li>Add ground pork and cook until browned.</li>
        <li>Stir in tomatoes and simmer.</li>
        <li>Toss spaghetti with sauce and fresh basil.</li>
        <li>Serve with Parmesan cheese.</li>
    </ol>
                       `,
            7: `
    <h2>Almond-Topped Pork Chops</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>Pork Chops</li>
        <li>Almonds</li>
        <li>Dijon Mustard</li>
        <li>Green Beans</li>
        <li>Baby Potatoes</li>
    </ul>
    <h3>Steps:</h3>
    <ol>
        <li>Preheat oven to 425°F. Crush almonds.</li>
        <li>Brush pork chops with Dijon mustard and coat with almonds.</li>
        <li>Roast pork chops until cooked through.</li>
        <li>Sauté green beans with garlic.</li>
        <li>Roast potatoes until tender.</li>
        <li>Serve pork chops with green beans and potatoes.</li>
    </ol>
                       `,
            8: `
    <h2>Jalapeño Popper Stuffed Chicken</h2>
    <h3>Ingredients:</h3>
    <ul>
        <li>Chicken Breasts</li>
        <li>Jalapeños</li>
        <li>Cream Cheese</li>
        <li>Cheddar Cheese</li>
        <li>Bacon</li>
    </ul>
    <h3>Steps:</h3>
    <ol>
        <li>Preheat oven to 425°F. Dice jalapeños and mix with cream cheese and cheddar.</li>
        <li>Butterfly chicken breasts and stuff with jalapeño mixture.</li>
        <li>Wrap chicken with bacon and secure with toothpicks.</li>
        <li>Bake until chicken is cooked through and bacon is crispy.</li>
        <li>Serve with a side salad or vegetables.</li>
    </ol>
            `,
    
            // Add more recipe details as needed
        };
        return details[id] || '<p>Recipe details not found.</p>';
    }
});