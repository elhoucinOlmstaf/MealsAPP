class Meal {
  constructor(
    id,
    CategoryId,
    Title,
    ImageUrl,
    steps,
    Duration,
    complexity,
    affordablity,
    isVegan,
    isVegeterian
  ) {
    this.id = id;
    this.CategoryId = CategoryId;
    this.Title = Title;
    this.ImageUrl = ImageUrl;
    this.steps = steps;
    this.Duration = Duration;
    this.complexity = complexity;
    this.affordablity = affordablity;
    this.isVegan = isVegan;
    this.isVegeterian = isVegeterian;
  }
}
export default Meal;
