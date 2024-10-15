'use client'
import React from 'react'
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

import TempChart from "@/components/chart/TempChart"

const Temperature = () => {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                <CardTitle>Theo Dõi Nhiệt Độ</CardTitle>
                <CardDescription>
                    Hiển thị dữ liệu nhiệt độ trong tuần đầu tiên của tháng 10 năm 2024.
                </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                    Xem Chi Tiết
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
                </Button>
            </CardHeader>
            <CardContent>
              <TempChart />
            </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
                <CardTitle>Nhiệt Độ Gần Đây</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    Nhiệt độ ngày 2024-10-01
                    </p>
                    <p className="text-sm text-muted-foreground">
                    22°C
                    </p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    Nhiệt độ ngày 2024-10-02
                    </p>
                    <p className="text-sm text-muted-foreground">
                    24°C
                    </p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    Nhiệt độ ngày 2024-10-03
                    </p>
                    <p className="text-sm text-muted-foreground">
                    21°C
                    </p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    Nhiệt độ ngày 2024-10-04
                    </p>
                    <p className="text-sm text-muted-foreground">
                    23°C
                    </p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    Nhiệt độ ngày 2024-10-05
                    </p>
                    <p className="text-sm text-muted-foreground">
                    25°C
                    </p>
                </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Temperature
