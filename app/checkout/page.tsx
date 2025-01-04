"use client";

import { ShippingForm } from "@/components/checkout/shipping-form";
import { PaymentForm } from "@/components/checkout/payment-form";
import { OrderSummary } from "@/components/checkout/order-summary";
import { Separator } from "@/components/ui/separator";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ShippingForm />
          <Separator />
          <PaymentForm />
        </div>
        <div>
          <OrderSummary 
            subtotal={299.99}
            shipping={9.99}
            tax={30.00}
          />
        </div>
      </div>
    </div>
  );
}