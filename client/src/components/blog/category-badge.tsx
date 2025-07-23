interface CategoryBadgeProps {
  category: string;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'essays':
        return 'bg-coral/10 text-coral';
      case 'tips':
        return 'bg-sky/10 text-sky-700';
      case 'stories':
        return 'bg-peach/10 text-pink-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'essays':
        return 'Personal Essay';
      case 'tips':
        return 'Writing Tips';
      case 'stories':
        return 'Short Story';
      default:
        return category;
    }
  };

  return (
    <span 
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryStyles(category)}`}
    >
      {getCategoryLabel(category)}
    </span>
  );
}
