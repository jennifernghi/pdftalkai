import MaxWidthWrapper from "@/components/MaxWidthWrapper";

 
export default function Home() {
  return (
// Center its child elements both horizontally and vertically.
// Display child elements in a vertical stack (flex-col).
// Apply a top margin of 7rem (mt-28) by default and 10rem (sm:mt-40) on small screens and up.
// Apply a bottom margin of 3rem (mb-12).

    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      {/* This styling creates a horizontally centered, rounded, white button with a shadow effect and padding. 
      On hover, the button’s border darkens slightly, and its background becomes semi-transparent with a smooth transition effect. 
      The flex layout allows for easy alignment and spacing of inner elements. 
      The button also has a modern, slightly elevated look with rounded edges and subtle backdrop blur. */}
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border 
      border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:ng-white/50">
        <p className = "text-sm font-semibold text-gray-700">
          PDF Talk AI is now public!
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
