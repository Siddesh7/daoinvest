export default function Nft({ nfts }) {
  return (
    <div className="w-[95%] m-auto mt-[30px] flex gap-8">
      {nfts.map((nft) => (
        <div className="w-[33%]">
          {" "}
          <a href="#" class="group relative block bg-black h-[400px]">
            <img
              src={nft.url}
              class="absolute inset-0 h-[400px] w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-xl font-bold text-white sm:text-2xl">
                {nft.asset}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
