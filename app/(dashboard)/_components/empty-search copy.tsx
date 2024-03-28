export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">No results found!</h2>
      <p className="test-muted-foreground text-sm mt-2">
        Try search for something else
      </p>
    </div>
  );
};
