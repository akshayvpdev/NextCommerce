"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ShippingForm() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" />
        </div>
        <div>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input id="postalCode" />
        </div>
      </div>
    </Card>
  );
}