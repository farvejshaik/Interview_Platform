export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function getDifficultyBadgeClass(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "badge-success";
    case "Medium":
      return "badge-warning";
    case "Hard":
      return "badge-error";
    default:
      return "badge-ghost";
  }
}
