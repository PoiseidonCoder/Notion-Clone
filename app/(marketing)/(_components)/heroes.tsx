import Image from "next/image"
export const Heroes = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center">
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
            <Image src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/https://images.ctfassets.net/spoqsaf9291f/7K4ABTnW9zHRzHXpdJhKq6/5f0828bc15d26a2fe1437affc2e9de34/front_main_hero_together.png" fill className="object-cover" alt="Documents" />
          </div>
          <div className="relative h-[350px] w-[350px] hidden md:block ">
            <Image src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/https://images.ctfassets.net/spoqsaf9291f/7K4ABTnW9zHRzHXpdJhKq6/5f0828bc15d26a2fe1437affc2e9de34/front_main_hero_together.png" fill className="object-cover" alt="Documents" />
          </div>
        </div>
      </div>
    </>
  )
}
