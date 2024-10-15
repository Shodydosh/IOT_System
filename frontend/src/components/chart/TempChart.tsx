"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Temperature area chart by date"

const temperatureData = [
  { date: "2024-10-01", temperature: 22 },
  { date: "2024-10-02", temperature: 24 },
  { date: "2024-10-03", temperature: 21 },
  { date: "2024-10-04", temperature: 23 },
  { date: "2024-10-05", temperature: 25 },
  { date: "2024-10-06", temperature: 20 },
]

const chartConfig = {
  temperature: {
    label: "Temperature",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const TempChart = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Temperature Chart</CardTitle>
        <CardDescription>
          Showing temperature data for the first week of October 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="" >
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={temperatureData}
            height={100} // Set the height to 100 (half of 200)
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(5)}
            />
            <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillTemperature" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-temperature)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-temperature)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="temperature"
              type="natural"
              fill="url(#fillTemperature"
              fillOpacity={0.4}
              stroke="var(--color-temperature)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              October 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TempChart;
