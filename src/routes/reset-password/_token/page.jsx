import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewPasswordPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Set New Password</CardTitle>
                    <CardDescription>Create a new password for your account</CardDescription>
                </CardHeader>
                <form className="space-y-6">
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">New Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                required
                            />
                        </div>
                        {/* {error && <div className="text-sm font-medium text-destructive">{error}</div>} */}
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                        >
                            Reset Password
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
