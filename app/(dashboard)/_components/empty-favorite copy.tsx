export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">No favorite boards found!</h2>
      <p className="test-muted-foreground text-sm mt-2">
        Try giving a board favorite
      </p>
    </div>
  );
};
