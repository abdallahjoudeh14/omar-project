import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPasswordPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <form className="space-y-6">
                    <CardHeader>
                        <CardTitle className="text-2xl">Reset Password</CardTitle>
                        <CardDescription>Enter your email address and we'll send you a link to reset your password</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john.doe@example.com"
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            className="w-full cursor-pointer"
                            type="submit"
                        >
                            Send Reset Link
                        </Button>
                        <div className="text-center text-sm">
                            Remember your password?{" "}
                            <Link
                                to="/login"
                                className="text-primary underline underline-offset-4"
                            >
                                Back to login
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
