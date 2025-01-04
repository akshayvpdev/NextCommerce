"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PaymentForm() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" placeholder="**** **** **** ****" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="***" />
          </div>
        </div>
      </div>
    </Card>
  );
}