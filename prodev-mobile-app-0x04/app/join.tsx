import { FACEBOOKLOGO, GOOGLELOGO } from '@/constants';
import { styles } from '@/styles/_joinstyle';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Join() {
    const router = useRouter();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.titleTextGroup}>
                <Text style={styles.titleText}>Create Account</Text>
                <Text style={styles.subText}>
                    Sign up to get started with your account
                </Text>
            </View>

            {/* Form */}
            <View style={styles.formGroup}>
                <View>
                    <Text style={styles.formLabel}>Full Name</Text>
                    <TextInput
                        style={styles.formControl}
                        placeholder="Enter your full name"
                        value={fullname}
                        onChangeText={setFullname}
                    />
                </View>

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
                            placeholder="Create a password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>
            </View>

            {/* Primary Button */}
            <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.buttonText}>Sign Up</Text>
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

            {/* Signin */}
            <View style={styles.signupgroup}>
                <Text style={styles.signupTitleText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/signin')}>
                    <Text style={styles.signupSubTitleText}> Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
