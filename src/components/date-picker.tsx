import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/src/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

export default function DatePicker({ date, setDate }: any) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "rounded-xl h-12 py-3 my-2 w-full justify-start bg-white border-[1.5px] font-medium border-zinc-200",
                        !date && "text-muted-foreground"
                    )}
                    style={{ boxShadow: "0px 4px 0px 0 rgba(0,0,0,0.05)" }}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    className="bg-white rounded-md"
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
