import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./ui/carousel"
  

export default function NativeCarousel(){
    return (
        <div className="w-[900px] self-center">
            <Carousel className=''>
                <CarouselContent className='rounded-3xl'>
                    <CarouselItem className=''>
                <video src="/vids/freestyle.mp4"  autoPlay muted loop className="h-90 rounded-2xl mx-5"></video>
                    </CarouselItem>
                    <CarouselItem>
                <video src="/vids/backstroke.mp4"  autoPlay muted loop className="h-90 rounded-2xl mx-5"></video>
                    </CarouselItem>
                    <CarouselItem>
                <video src="/vids/fly.mp4"  autoPlay muted loop className="h-90 rounded-2xl mx-5"></video>
                    </CarouselItem>
                    <CarouselItem>
                <video src="/vids/breast.mp4" autoPlay muted loop className="h-90 rounded-2xl mx-5"></video>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}