const SHow = MEALS.filter((meal) => meal.CategoryId.indexOf(Catid) >= 0);


options={{
    // headerTitle: ({ route }) => ({ title: route.params.title.Title }),
    headerRight: () => (
     <HeaderButton HedaerButtonComponent={CustomHeaderButton}>
       <Item title="Favorites" iconName="ios-star" />
     </HeaderButton>
    ),
  }}F

