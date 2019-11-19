
export const getOrientation = store => ({ 
        alpha: store.gyro.alpha, 
        beta: store.gyro.beta, 
        gamma: store.gyro.gamma,
        compass: store.gyro.compass,
        compass_accuracy: store.gyro.compass_accuracy,
        x: store.gyro.x, 
        y: store.gyro.y, 
        z: store.gyro.z 
});

export const getPermissions = store => ({ 
        motion: store.permissions.motion,
});

