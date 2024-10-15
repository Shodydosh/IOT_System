import React from 'react'
import Link from "next/link"
import {
  ArrowUpRight,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"


const ElectricityTrack = () => {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                <CardTitle>Lượng Điện Tiêu Thụ</CardTitle>
                <CardDescription>
                    Thông tin lượng điện tiêu thụ của các thiết bị trong hệ thống.
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
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Thiết Bị</TableHead>
                    <TableHead className="hidden xl:table-column">
                        Loại Thiết Bị
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                        Trạng Thái
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                        Ngày Ghi Nhận
                    </TableHead>
                    <TableHead className="text-right">Lượng Điện (kWh)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell>
                        <div className="font-medium">Máy lạnh</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                        Thiết Bị Điện
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                        Đang Hoạt Động
                        </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2024-10-15
                    </TableCell>
                    <TableCell className="text-right">2.5 kWh</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>
                        <div className="font-medium">Đèn phòng khách</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                        Đèn
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                        Đang Hoạt Động
                        </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2024-10-15
                    </TableCell>
                    <TableCell className="text-right">0.5 kWh</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>
                        <div className="font-medium">Quạt</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                        Thiết Bị Điện
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                        Đang Hoạt Động
                        </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2024-10-15
                    </TableCell>
                    <TableCell className="text-right">0.8 kWh</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>
                        <div className="font-medium">Tủ lạnh</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                        Thiết Bị Điện
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                        Đang Hoạt Động
                        </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2024-10-15
                    </TableCell>
                    <TableCell className="text-right">3.0 kWh</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
                <CardTitle>Lượng Điện Tiêu Thụ Gần Đây</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    Máy lạnh
                    </p>
                    <p className="text-sm text-muted-foreground">
                    2024-10-15
                    </p>
                </div>
                <div className="ml-auto font-medium">2.5 kWh</div>
                </div>
                <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    Đèn phòng khách
                    </p>
                    <p className="text-sm text-muted-foreground">
                    2024-10-15
                    </p>
                </div>
                <div className="ml-auto font-medium">0.5 kWh</div>
                </div>
                <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>QT</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    Quạt
                    </p>
                    <p className="text-sm text-muted-foreground">
                    2024-10-15
                    </p>
                </div>
                <div className="ml-auto font-medium">0.8 kWh</div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default ElectricityTrack
