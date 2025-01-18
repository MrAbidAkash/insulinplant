import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <h1 className="text-4xl font-bold">Welcome to landing page</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
          sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
          a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
          molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
          at, nibh. Fusce ultrices.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
        <h1 className="text-4xl font-bold">Welcome to landing page</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
          sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
          a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
          molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
          at, nibh. Fusce ultrices.
        </p>
      </div>
    </div>
  );
}
