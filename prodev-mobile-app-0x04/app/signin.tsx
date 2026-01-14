import { FACEBOOKLOGO, GOOGLELOGO } from '@/constants';
import { styles } from '@/styles/_joinstyle';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Signin() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.titleTextGroup}>
                <Text style={styles.titleText}>Sign In</Text>
                <Text style={styles.subText}>
                    Welcome back, please login to your account
                </Text>
            </View>

            {/* Form */}
            <View style={styles.formGroup}>
                <View>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput
                        style={styles.formControl}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View>
                    <Text style={styles.formLabel}>Password</Text>
                    <View style={styles.formPasswordControl}>
                        <TextInput
                            style={styles.passwordControl}
                            placeholder="Enter your password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </View>
            </View>

            {/* Primary Button */}
            <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerGroup}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.divider} />
            </View>

            {/* Social Buttons */}
            <View style={styles.secondaryButtonGroup}>
                <TouchableOpacity style={styles.secondaryButton}>
                    <Image source={GOOGLELOGO} />
                    <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton}>
                    <Image source={FACEBOOKLOGO} />
                    <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                </TouchableOpacity>
            </View>

            {/* Signup */}
            <View style={styles.signupgroup}>
                <Text style={styles.signupTitleText}>Don’t have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/join')}>
                    <Text style={styles.signupSubTitleText}> Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
