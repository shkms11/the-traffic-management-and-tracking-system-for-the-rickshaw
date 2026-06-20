import { useState } from "react";
import { Bike, CalendarPlus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RegisterRickshawModal() {
  const [formData, setFormData] = useState({
    rickshawNumber: "",
    model: "",
    color: "",
    licensePlate: "",
    driverName: "",
    purchaseDate: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // TODO: call API
  };

  return (
    <Dialog>
      {/* Open Button */}
      <DialogTrigger asChild>
        <Button
          className="
            bg-emerald-700
            hover:bg-emerald-800
            text-white
            rounded-xl
            h-12
            transition-all
          "
        >
          <Plus className="mr-2 h-4 w-4" />
          Register Rickshaw
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent
        className="
          max-w-2xl
          rounded-3xl
          border border-white/30
          bg-white/20
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
          p-0
          overflow-hidden
        "
      >
        {/* Shine overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

        <div className="relative z-10 p-6 sm:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="flex items-center gap-3 text-xl font-semibold text-emerald-900">
              <Bike className="h-5 w-5 text-emerald-700" />
              Register New Rickshaw
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Rickshaw Number */}
            <div className="space-y-2">
              <Label>Rickshaw Number</Label>
              <Input
                className="h-12 rounded-xl"
                placeholder="RKS-102"
                value={formData.rickshawNumber}
                onChange={(e) => handleChange("rickshawNumber", e.target.value)}
              />
            </div>

            {/* Model */}
            <div className="space-y-2">
              <Label>Model / Type</Label>
              <Input
                className="h-12 rounded-xl"
                placeholder="Battery / Manual"
                value={formData.model}
                onChange={(e) => handleChange("model", e.target.value)}
              />
            </div>

            {/* Color */}
            <div className="space-y-2">
              <Label>Color</Label>
              <Input
                className="h-12 rounded-xl"
                placeholder="Green"
                value={formData.color}
                onChange={(e) => handleChange("color", e.target.value)}
              />
            </div>

            {/* License */}
            <div className="space-y-2">
              <Label>License Plate</Label>
              <Input
                className="h-12 rounded-xl"
                placeholder="DHAKA-12345"
                value={formData.licensePlate}
                onChange={(e) => handleChange("licensePlate", e.target.value)}
              />
            </div>

            {/* Driver */}
            <div className="space-y-2">
              <Label>Assign Driver</Label>
              <Input
                className="h-12 rounded-xl"
                placeholder="Driver name"
                value={formData.driverName}
                onChange={(e) => handleChange("driverName", e.target.value)}
              />
            </div>

            {/* Purchase Date */}
            <div className="space-y-2">
              <Label>Purchase Date</Label>

              <div className="relative">
                <CalendarPlus className="absolute left-3 top-3.5 h-4 w-4 text-neutral-400" />

                <Input
                  type="date"
                  className="h-12 rounded-xl pl-10"
                  value={formData.purchaseDate}
                  onChange={(e) => handleChange("purchaseDate", e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="
                w-full
                h-12
                rounded-xl
                bg-emerald-700
                hover:bg-emerald-800
                text-white
                transition-all
              "
            >
              Register Rickshaw
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
