"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { DollarSign, Calculator, Download } from "lucide-react";

interface MortgageCalculatorProps {
  propertyPrice: number;
}

const MortgageCalculator = ({ propertyPrice }: MortgageCalculatorProps) => {
  const [price, setPrice] = useState(propertyPrice);
  const [downPayment, setDownPayment] = useState(Math.round(propertyPrice * 0.2));
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  
  // Calculate mortgage details
  useEffect(() => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (principal > 0 && monthlyRate > 0) {
      const x = Math.pow(1 + monthlyRate, numberOfPayments);
      const monthly = (principal * x * monthlyRate) / (x - 1);
      
      setMonthlyPayment(monthly);
      setTotalPayment(monthly * numberOfPayments);
      setTotalInterest(monthly * numberOfPayments - principal);
    } else {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  }, [price, downPayment, interestRate, loanTerm]);
  
  // Handle down payment changes
  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent(Math.round((value / price) * 100));
  };
  
  const handleDownPaymentPercentChange = (value: number[]) => {
    const percent = value[0];
    setDownPaymentPercent(percent);
    setDownPayment(Math.round((percent / 100) * price));
  };
  
  // Handle price changes
  const handlePriceChange = (value: number) => {
    setPrice(value);
    setDownPayment(Math.round((downPaymentPercent / 100) * value));
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Pie chart data
  const chartData = [
    { name: "Principal", value: price - downPayment, color: "hsl(var(--chart-1))" },
    { name: "Interest", value: totalInterest, color: "hsl(var(--chart-2))" },
    { name: "Down Payment", value: downPayment, color: "hsl(var(--chart-3))" }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Mortgage Calculator</h2>
      
      <Tabs defaultValue="calculator">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="calculator">
            <Calculator className="h-4 w-4 mr-2" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="breakdown">
            <DollarSign className="h-4 w-4 mr-2" />
            Payment Breakdown
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculator" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="price">Property Price</Label>
              <div className="relative mt-1">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="price"
                  type="number"
                  className="pl-10"
                  value={price}
                  onChange={(e) => handlePriceChange(Number(e.target.value))}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="downPayment">Down Payment</Label>
              <div className="relative mt-1">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="downPayment"
                  type="number"
                  className="pl-10"
                  value={downPayment}
                  onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                />
              </div>
              <div className="mt-2">
                <Slider
                  defaultValue={[20]}
                  max={50}
                  step={1}
                  value={[downPaymentPercent]}
                  onValueChange={handleDownPaymentPercentChange}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0%</span>
                  <span>{downPaymentPercent}%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <div className="mt-2">
                <Slider
                  defaultValue={[4.5]}
                  min={1}
                  max={10}
                  step={0.1}
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1%</span>
                  <span>{interestRate}%</span>
                  <span>10%</span>
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="loanTerm">Loan Term (years)</Label>
              <Input
                id="loanTerm"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
              />
              <div className="mt-2">
                <Slider
                  defaultValue={[30]}
                  min={5}
                  max={30}
                  step={5}
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5 yrs</span>
                  <span>{loanTerm} yrs</span>
                  <span>30 yrs</span>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Payment</p>
                  <p className="text-2xl font-bold">{formatCurrency(monthlyPayment)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
                  <p className="text-2xl font-bold">{formatCurrency(totalInterest)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Total Payment</p>
                  <p className="text-2xl font-bold">{formatCurrency(totalPayment + downPayment)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Button variant="outline" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Amortization Schedule
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="breakdown" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-1))] mr-2"></div>
                    <span>Principal</span>
                  </div>
                  <span className="font-medium">{formatCurrency(price - downPayment)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-2))] mr-2"></div>
                    <span>Interest</span>
                  </div>
                  <span className="font-medium">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-3))] mr-2"></div>
                    <span>Down Payment</span>
                  </div>
                  <span className="font-medium">{formatCurrency(downPayment)}</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Cost</span>
                    <span className="font-semibold">{formatCurrency(totalPayment + downPayment)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Monthly Payment Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Principal & Interest</span>
                    <span>{formatCurrency(monthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Property Taxes (est.)</span>
                    <span>{formatCurrency(price * 0.01 / 12)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Home Insurance (est.)</span>
                    <span>{formatCurrency(price * 0.005 / 12)}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Est. Total Monthly Payment</span>
                      <span className="font-semibold">
                        {formatCurrency(monthlyPayment + (price * 0.01 / 12) + (price * 0.005 / 12))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    layout="vertical"
                    verticalAlign="bottom"
                    align="center"
                    formatter={(value, entry, index) => {
                      return (
                        <span className="text-sm">
                          {value}: {formatCurrency(chartData[index].value)}
                        </span>
                      );
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="mt-8 bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This calculator provides estimates only and should not be considered as financial advice. Actual mortgage terms and rates may vary. Property taxes and insurance costs are estimates and will vary based on location and other factors. Please consult with a mortgage professional for accurate information.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MortgageCalculator;