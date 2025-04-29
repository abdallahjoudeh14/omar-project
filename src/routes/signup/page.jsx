import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const majors = [
    {
        value: "computer science",
        label: "Computer Science",
    },
    {
        value: "cybersecurity",
        label: "Cyber security",
    },
    {
        value: "arictricial intelligence",
        label: "Arictricial Intelligence",
    },
    {
        value: "software engineering",
        label: "Software Engineering",
    },
    {
        value: "computer information systems",
        label: "Computer Information Systems",
    },
    {
        value: "business information technology",
        label: "Business Information Technology",
    },
];

export default function SignupPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Create an account</CardTitle>
                    <CardDescription>Enter your information to create a new account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input
                                id="firstName"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input
                                id="lastName"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="major">Major</Label>
                        <Select>
                            <SelectTrigger
                                id="major"
                                className="w-full"
                            >
                                <SelectValue placeholder="Select your major" />
                            </SelectTrigger>
                            <SelectContent>
                                {majors.map((major) => (
                                    <SelectItem
                                        key={major.value}
                                        value={major.value}
                                    >
                                        {major.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full">Sign up</Button>
                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-primary underline underline-offset-4"
                        >
                            Log in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
