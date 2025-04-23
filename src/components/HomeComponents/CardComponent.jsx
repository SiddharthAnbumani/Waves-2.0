import Card from "./Card"

export default function CardComponent(){
    return(
        <div className="flex flex-col items-center space-y-4 my-5 h-150">
            <h1 className="text-5xl font-extrabold text-black">Swimming Courses</h1>
            <div className="h-screen flex justify-center space-x-5">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}