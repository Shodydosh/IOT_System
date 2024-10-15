import React from 'react'
import {
  Activity,
  BatteryCharging,
  Power,
  Thermometer,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card"

const Electricity = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                Tổng Điện Năng Tiêu Thụ
                </CardTitle>
                <BatteryCharging className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">102 kWh</div>
                <p className="text-xs text-muted-foreground">
                +15% so với tháng trước
                </p>
            </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                Điện Năng Máy Lạnh
                </CardTitle>
                <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">25 kWh</div>
                <p className="text-xs text-muted-foreground">
                +10% so với tháng trước
                </p>
            </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Điện Năng Đèn</CardTitle>
                <Power className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">12 kWh</div>
                <p className="text-xs text-muted-foreground">
                +5% so với tháng trước
                </p>
            </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Thiết Bị Đang Hoạt Động</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">5 thiết bị</div>
                <p className="text-xs text-muted-foreground">
                +2 thiết bị so với giờ trước
                </p>
            </CardContent>
            </Card>
        </div>
  )
}

export default Electricity
